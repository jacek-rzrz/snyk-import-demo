import {formatSeconds} from "./formatSeconds";

test('under a minute', () => {
    expect(formatSeconds(0)).toBe('0s');
    expect(formatSeconds(1)).toBe('1s');
    expect(formatSeconds(59)).toBe('59s');
});

test('whole minutes', () => {
    expect(formatSeconds(60)).toBe('1m 00s');
})

test('minutes and under ten seconds', () => {
    expect(formatSeconds(61)).toBe('1m 01s');
    expect(formatSeconds(69)).toBe('1m 09s');
})

test('minutes and ten seconds or more', () => {
    expect(formatSeconds(70)).toBe('1m 10s');
})
