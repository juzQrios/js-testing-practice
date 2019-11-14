import reverseString from '../src/reverse-string';

test('Should reverse the passed string', () => {
  expect(reverseString('sum')).toBe('mus');
  expect(reverseString('JavaScript')).toBe('tpircSavaJ');
});

test('Should reverse the passed sentence', () => {
  expect(reverseString('I am here')).toBe('ereh ma I');
});

test('Palindrome check', () => {
  expect(reverseString('ama')).toBe('ama');
});
