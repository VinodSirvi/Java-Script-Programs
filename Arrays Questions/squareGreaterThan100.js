//squareGreaterThan100
function squareGreaterThan100(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let square = arr[i] * arr[i];
        if (square > 100) {
            result.push(square);
        }
    }
    return result;
}

// Example
console.log(squareGreaterThan100([5, 8, 11, 3]));
// Output: [121]
