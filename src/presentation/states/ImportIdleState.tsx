import {TargetProp} from "../TargetProp";
import {StateSkeleton} from "./StateSkeleton";

export const ImportIdleState = ({target}: TargetProp) => {
    return <StateSkeleton status="click to import" target={target} />
}
