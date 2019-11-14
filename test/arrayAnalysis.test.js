import arrayAnalysis from '../src/arrayAnalysis';

test('array analysis with empty array', () => {
  expect(() => { arrayAnalysis([]); })
    .toThrow(TypeError);
});

test('array analysis without negative value', () => {
  expect(arrayAnalysis([1, 2, 3, 5, 6])).toStrictEqual({
    average: 3.4, min: 1, max: 6, length: 5
  });
});

test('array analysis with negative value', () => {
  expect(arrayAnalysis([0, 2, -53, 25, -6])).toStrictEqual({
    average: -6.4, min: -53, max: 25, length: 5
  });
});
