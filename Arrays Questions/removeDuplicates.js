//Remove duplicate values while preserving order
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(removeDuplicates([1, 2, 1, 3, 2]));
// Output: [1, 2, 3]
