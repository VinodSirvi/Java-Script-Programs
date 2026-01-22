//Check if all array elements are unique
function areAllUnique(arr) {
    return new Set(arr).size === arr.length;
}

console.log(areAllUnique([1, 2, 3]));
// Output: true
