import {Target} from "../../domain/target";
import {TargetHeader} from "../TargetHeader";
import {formatSeconds} from "../formatSeconds";

interface Props {
    target: Target;
    status: string;
    importId?: string;
    durationSeconds?: number;
}

export const StateSkeleton = ({target, status, importId, durationSeconds}: Props) => (
    <>
        <TargetHeader target={target} />
        { importId && <span className="import-id">Import ID: {importId}</span> }
        <span className="import-status">{status}</span>
        { durationSeconds !== undefined && <span className="import-duration">{formatSeconds(durationSeconds)}</span> }
    </>
);
