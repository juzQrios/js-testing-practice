import Calculator from '../src/calculator';

test('Should return proper addition result', () => {
  expect(Calculator.sum(1, 2)).toBe(3);
  expect(Calculator.sum(1, -2)).toBe(-1);
  expect(Calculator.sum(-10, -2)).toBe(-12);
});

test('Should return proper Subtraction result', () => {
  expect(Calculator.sub(10, 2)).toBe(8);
  expect(Calculator.sub(2, 2)).toBe(0);
  expect(Calculator.sub(2, 10)).toBe(-8);
  expect(Calculator.sub(10, -2)).toBe(12);
});

test('Should return proper Multiplication result', () => {
  expect(Calculator.mul(2, 3)).toBe(6);
  expect(Calculator.mul(2, -3)).toBe(-6);
  expect(Calculator.mul(-2, -3)).toBe(6);
});

test('Should return proper Division result', () => {
  expect(Calculator.div(10, 2)).toBe(5);
  expect(Calculator.div(2, 10)).toBe(0.2);
  expect(Calculator.div(10, -2)).toBe(-5);
  expect(Calculator.div(-10, -2)).toBe(5);
});

test('Should return Infinity on divide by zero', () => {
  expect(Calculator.div(1, 0)).toBe(Infinity);
});

test('Should return NaN if no arguments are passed', () => {
  expect(Calculator.sum()).toBe(NaN);
  expect(Calculator.sub()).toBe(NaN);
  expect(Calculator.mul()).toBe(NaN);
  expect(Calculator.div()).toBe(NaN);
});
