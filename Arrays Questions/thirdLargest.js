//Find the third largest number
function thirdLargest(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique[2];
}

console.log(thirdLargest([10, 40, 30, 20, 40]));
// Output: 20
