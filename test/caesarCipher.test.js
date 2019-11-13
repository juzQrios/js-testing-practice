import caesarCipher from '../src/caesarCipher';

test('convert small letter without wrapping', () => {
  expect(caesarCipher('a', 25)).toBe('z');
});

test('convert small letter with wrapping', () => {
  expect(caesarCipher('z', 5)).toBe('e');
});

test('convert capital letter', () => {
  expect(caesarCipher('Z', 5)).toBe('E');
});

test('convert full string with just spaces', () => {
  expect(caesarCipher('If he had anything confidential to say', 7))
    .toBe('Pm ol ohk hufaopun jvumpkluaphs av zhf');
});

test('convert full string with punctuation', () => {
  expect(caesarCipher('If he had anything confidential to say', 7))
    .toBe('Pm ol ohk hufaopun jvumpkluaphs av zhf');
});

test('convert full string with punctuation', () => {
  expect(caesarCipher('he wrote it in cipher, that is, by so changing the order of the letters of the alphabet.', 20))
    .toBe('by qliny cn ch wcjbyl, nbun cm, vs mi wbuhacha nby ilxyl iz nby fynnylm iz nby ufjbuvyn.');
});
