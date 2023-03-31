export function secondsBetween(start: Date, end: Date) {
    // @ts-ignore
    return Math.max(0, Math.round((end - start) / 1000));
}
