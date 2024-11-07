const multiDimArr = [1, [2, [3, [4, [5, 6]]]]];
const flatArr = arr => arr.flat(Infinity);

console.log(flatArr(multiDimArr));