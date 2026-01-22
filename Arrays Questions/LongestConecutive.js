//Find longest consecutive sequence
function longestConsecutive(arr) {
    arr = [...new Set(arr)];
    arr.sort((a, b) => a - b);

    let maxLength = 1;
    let currentLength = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            currentLength++;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 1;
        }
    }
    return maxLength;
}

// Example
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// Output: 4
