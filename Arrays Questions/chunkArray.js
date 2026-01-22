//Split an array into chunks of size 2
function chunkArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr.slice(i, i + 2));
    }
    return result;
}

console.log(chunkArray([1, 2, 3, 4, 5]));
// Output: [[1,2],[3,4],[5]]
