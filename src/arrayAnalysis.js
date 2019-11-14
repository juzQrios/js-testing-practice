const average = array => array.reduce((accum, item) => accum + item) / array.length;

const max = array => Math.max(...array);

const min = array => Math.min(...array);

const arrayAnalysis = array => ({
  average: average(array),
  min: min(array),
  max: max(array),
  length: array.length
});

export default arrayAnalysis;
