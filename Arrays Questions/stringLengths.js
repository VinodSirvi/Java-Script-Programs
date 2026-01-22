//Create an array of string lengths
function stringLengths(arr) {
    let result = [];
    for (let word of arr) {
        result.push(word.length);
    }
    return result;
}

console.log(stringLengths(["java", "javascript"]));
// Output: [4, 10]
