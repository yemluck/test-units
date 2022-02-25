const leapYear = require('../../src/math/leapYear');

test ('should return false for 0', () => {
    expect(leapYear(0)).toBe(false);
});

