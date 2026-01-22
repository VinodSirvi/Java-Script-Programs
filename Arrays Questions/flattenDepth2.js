//Flatten an array up to depth 2
function flattenDepth2(arr) {
    return arr.flat(2);
}

console.log(flattenDepth2([1, [2, [3, 4]]])); 
// Output: [1,2,3,4]
