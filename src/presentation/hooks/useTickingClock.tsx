import {useEffect, useState} from "react";

export function useTickingClock() {
    const [now, setNow] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date())
        }, 1000);
        return () => clearInterval(interval);
    }, [setNow]);
    return now;
}
