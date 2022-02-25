const multiply = require('../../src/math/multiply');

test('6 * 7 should return 42', () => {
    let result = multiply(6, 7);
    expect (result).toBe(42);
});

test ('-1 * 0.5 should return -0.5', () => {
    let result = multiply(-1, 0.5);
    expect(result).toBe(-0.5)
});

test('0 * 0 should return 0', () => {
    let result = multiply(0, 0);
    expect(result).toBe(0)
});