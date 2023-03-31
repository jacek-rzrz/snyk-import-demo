import {useCallback, useEffect, useState} from "react";

export function useLogs(): [string | null, (logs: string | null) => void] {
    const [logs, setLogs] = useState<string | null>(null);
    const hideLogs = useCallback(() => {
        setLogs(null)
    }, [setLogs])
    useEscapeKey(hideLogs);
    return [logs, setLogs];
}

function useEscapeKey(callback: () => void) {
    const onKey = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') callback();
    }, [callback]);
    useEffect(() => {
        document.addEventListener("keydown", onKey, false);
        return () => {
            document.removeEventListener("keydown", onKey, false);
        };
    }, [callback, onKey]);
}
