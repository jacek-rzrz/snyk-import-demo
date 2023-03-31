import {TargetProp} from "../TargetProp";
import {ImportComplete} from "../../domain/importState";
import {StateSkeleton} from "./StateSkeleton";
import {secondsBetween} from "../secondsBetween";

interface Props extends TargetProp {
    state: ImportComplete;
}

export const ImportCompleteState = ({target, state}: Props) => {
    return <StateSkeleton status="imported" target={target} importId={state.importId} durationSeconds={secondsBetween(state.startedAt, state.finishedAt)} />
}
