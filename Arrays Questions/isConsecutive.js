// Check if array contains consecutive numbers
function isConsecutive(arr) {
    arr.sort((a, b) => a - b);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return false;
        }
    }
    return true;
}

// Example
console.log(isConsecutive([3, 4, 5, 6]));
// Output: true
