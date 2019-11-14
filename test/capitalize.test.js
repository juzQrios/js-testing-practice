import capitalize from '../src/capitalize';

test('Should capitalize the first letter of the only word', () => {
  expect(capitalize('sum')).toBe('Sum');
  expect(capitalize('anything')).toBe('Anything');
});

test('Should capitalize the first letter of the first word', () => {
  expect(capitalize('i am here')).toBe('I am here');
  expect(capitalize('javascript is good')).toBe('Javascript is good');
});

test('Should not capitalize any other letters', () => {
  expect(capitalize('javascript')).not.toBe('JavaScript');
});
