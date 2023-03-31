import {ImportError} from "../../domain/importState";

type Props = {
    state: ImportError;
}

export const ImportErrorState = ({ state }: Props) => {

    return (
        <>
            <span>{state.status}</span>
            <span>{state.error}</span>
        </>
    );
}
