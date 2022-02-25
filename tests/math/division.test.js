const division = require('../../src/math/division');

test('should return 0 for 0', () => {
    expect(division(2004)).toBe("Fizz");
});

test('should return "Fizz" for 9', () => {
    expect(division(9)).toBe("Fizz");
});

test('should return "Fizz" for 20', () => {
    expect(division(20)).toBe("Buzz");
});

test('should return "FizzBuzz" for 15', () => {
    expect(division(15)).toBe("FizzBuzz");
});

test('should return n for n not divisible by 3 or 5', () => {
    expect(division(11)).toBe(11);
});

test('should return "Fizz" for n/3', () => {
    expect(division(9)).toBe("Fizz");
});

test('should return undefined for a string,', () => {
    expect(division('5')).toBe(undefined);
});

test('should return undefined for no argument,', () => {
    expect(division()).toBe(undefined);
});