//Find all duplicate values in an array
function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 1]));
// Output: [2, 1]
