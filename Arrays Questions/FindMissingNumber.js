//Find the missing number in a sequence
function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let num of arr) {
        actualSum += num;
    }

    return expectedSum - actualSum;
}

// Example (1–5, missing 4)
console.log(findMissingNumber([1, 2, 3, 5], 5));
// Output: 4
