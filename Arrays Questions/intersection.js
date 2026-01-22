//Find intersection of two arrays
function intersection(arr1, arr2) {
    let result = [];
    for (let val of arr1) {
        if (arr2.includes(val) && !result.includes(val)) {
            result.push(val);
        }
    }
    return result;
}

console.log(intersection([1,2,3],[2,3,4]));
// Output: [2,3]
