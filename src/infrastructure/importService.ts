import {TargetImporter} from "../domain/targetImporter";
import axios from "axios";
import {ImportComplete, ImportError, ImportInProgress, isError} from "../domain/importState";
import {Target} from "../domain/target";

const ORG_ID = process.env.REACT_APP_ORG_ID;
const INTEGRATION_ID = process.env.REACT_APP_INTEGRATION_ID;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

async function triggerImport(target: Target): Promise<ImportError | ImportInProgress> {
    const {status, headers, data} = await axios.post(`/v1/org/${ORG_ID}/integrations/${INTEGRATION_ID}/import`, {
        target
    }, {
        validateStatus: () => true,
        headers: {
            authorization: `token ${API_TOKEN}`
        }
    });
    if (status !== 201) {
        return {state: 'error', status, error: JSON.stringify(data)};
    }

    const url = headers['location'] as string;
    const importId = url.match(/[^/]+$/)![0];
    const urlWithoutHost = url.replace(/https:\/\/[a-z.]+\//, '/');
    return {
        state: 'progress',
        importId,
        url: urlWithoutHost,
        startedAt: new Date(),
    };
}

async function monitorImport(state: ImportInProgress): Promise<ImportError | ImportComplete> {
    const {status, data} = await axios.get(state.url, {
        validateStatus: () => true,
        headers: {
            authorization: `token ${API_TOKEN}`
        }
    });
    if (status !== 200) {
        return {state: 'error', status, error: JSON.stringify(data)};
    }

    if (data.status === 'pending') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return monitorImport(state);
    }

    console.log('status', data.status);

    return {
        state: 'complete',
        importId: state.importId,
        startedAt: state.startedAt,
        finishedAt: new Date(),
        importLog: data
    };
}

export const importTarget: TargetImporter = async (target, notify) => {
    notify({state: 'pending'});
    const state = await triggerImport(target);
    notify(state);
    if (isError(state)) {
        return;
    }
    notify(await monitorImport(state));


}
