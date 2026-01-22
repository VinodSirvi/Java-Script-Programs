// difference between two arrays
function difference(arr1, arr2) {
    return arr1.filter(val => !arr2.includes(val));
}

console.log(difference([1,2,3],[2]));
// Output: [1,3]
