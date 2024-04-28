//Method-1
function chunk(array, size) {
  let result = [];
  let index = 0;
  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index = index + size;
  }
  return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

//Method-2
const chunk2 = (array, size) =>
  array.length <= size
    ? [array]
    : [array.slice(0, size), ...chunk2(array.slice(size), size)];
    
console.log(chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3));
