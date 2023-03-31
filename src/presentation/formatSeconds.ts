

export function formatSeconds(seconds: number) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const result: string[] = [];
    if(mins > 0) result.push(m(mins));
    result.push(s(secs, mins > 0));
    return result.join(' ');
}

function m(minutes: number) {
    return `${minutes}m`;
}

function s(seconds: number, pad = false) {
    return `${pad && seconds < 10 ? '0': ''}${seconds}s`;
}
