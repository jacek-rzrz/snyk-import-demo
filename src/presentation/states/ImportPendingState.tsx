import {TargetProp} from "../TargetProp";
import {StateSkeleton} from "./StateSkeleton";


export const ImportPendingState = ({target}: TargetProp) => {
    return <StateSkeleton status="triggering..." target={target} />
}
