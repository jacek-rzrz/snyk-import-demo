
export type ImportIdle = {
    state: 'idle';
}

export function isIdle(state: ImportState): state is ImportIdle {
    return state.state === 'idle';
}

export type ImportPending = {
    state: 'pending';
}

export function isPending(state: ImportState): state is ImportPending {
    return state.state === 'pending';
}

export type ImportInProgress = {
    state: 'progress';
    url: string;
    importId: string;
    startedAt: Date;
}

export function isInProgress(state: ImportState): state is ImportInProgress {
    return state.state === 'progress';
}

export type ImportError = {
    state: 'error';
    status: number;
    error: string;
}

export function isError(state: ImportState): state is ImportError {
    return state.state === 'error';
}

export type ImportComplete = {
    importId: string;
    startedAt: Date;
    finishedAt: Date;
    state: 'complete';
    importLog: any;
}

export function isComplete(state: ImportState): state is ImportComplete {
    return state.state === 'complete';
}

export type ImportState = ImportIdle | ImportPending | ImportInProgress | ImportError | ImportComplete;

export type ImportStateObserver = (state: ImportState) => void;
