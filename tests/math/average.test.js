const average = require('../../src/math/average');

test ('should return  18 for [2, 17, 35]', () => {
 expect(average([2, 17, 35])).toBe(18);
});

test ('should return undefined for []', () => {
    expect(average([])).toBe(undefined);
});

test('should return 372 for [372]', () => {
    expect(average([372])).toBe(372);
});

test('should return undefined for an array with strings', () => {
    expect(average(['a', 'b', 'c'])).toBe(undefined);
});