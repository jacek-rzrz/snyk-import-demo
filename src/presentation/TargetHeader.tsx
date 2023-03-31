import {TargetProp} from "./TargetProp";

export const TargetHeader = ({target}: TargetProp) => {
    return (
        <span className="target-header">
            <span className="target-owner">{target.owner}</span>
            &nbsp;/&nbsp;
            <span className="target-name">{target.name}</span>
            &nbsp;&nbsp;
            <span className="target-branch">[{target.branch}]</span>
        </span>
    )
}
