//Sort numbers based on last digit
function sortByLastDigit(arr) {
    return arr.sort((a, b) => (a % 10) - (b % 10));
}

console.log(sortByLastDigit([23, 45, 12, 89]));
// Output: [12, 23, 45, 89]
