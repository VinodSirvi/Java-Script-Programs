//Rotate array to the left by 1
function rotateLeft(arr) {
  let first = arr.shift();
  arr.push(first);
  return arr;
}

console.log(rotateLeft([1, 2, 3, 4]));
// Output: [2,3,4,1]
