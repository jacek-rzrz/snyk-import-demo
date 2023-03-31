import {useCallback, useState} from "react";
import {ImportState, isComplete, isError, isIdle, isInProgress, isPending} from "../domain/importState";
import {importTarget} from "../infrastructure/importService";
import {TargetProp} from "./TargetProp";
import {ImportIdleState} from "./states/ImportIdleState";
import {ImportInProgressState} from "./states/ImportInProgressState";
import {ImportErrorState} from "./states/ImportErrorState";
import {ImportCompleteState} from "./states/ImportCompleteState";
import {ImportPendingState} from "./states/ImportPendingState";

interface Props extends TargetProp {
    now: Date;
    displayLogs: (logs: string) => void;
}

export const ImportTile = ({target, displayLogs, now}: Props) => {
    const [state, setState] = useState<ImportState>({ state: 'idle'});

    const startImport = useCallback(() => {
        if (isIdle(state)) {
            importTarget(target, setState).then();
        }
        if(isComplete(state)) {
           displayLogs(state.importLog);
        }
    }, [state, setState, displayLogs, target]);
    return (
        <div className={`import-tile import-tile-${state.state}`} onClick={startImport}>
            {isIdle(state) && <ImportIdleState target={target} />}
            {isPending(state) && <ImportPendingState target={target}/>}
            {isInProgress(state) && <ImportInProgressState target={target} state={state} now={now}/>}
            {isError(state) && <ImportErrorState state={state} /> }
            {isComplete(state) && <ImportCompleteState target={target} state={state} />}
        </div>
    );
}

