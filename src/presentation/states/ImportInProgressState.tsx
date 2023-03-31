import {TargetProp} from "../TargetProp";
import {ImportInProgress} from "../../domain/importState";
import {StateSkeleton} from "./StateSkeleton";
import {secondsBetween} from "../secondsBetween";

interface Props extends TargetProp {
    state: ImportInProgress;
    now: Date;
}

export const ImportInProgressState = ({target, state, now}: Props) => {
    return <StateSkeleton
        status="importing..."
        target={target}
        importId={state.importId}
        durationSeconds={secondsBetween(state.startedAt, now)}
    />
}
