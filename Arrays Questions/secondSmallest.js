//. Find the second smallest number
function secondSmallest(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => a - b);
    return unique[1];
}

console.log(secondSmallest([4, 1, 2, 1, 3]));
// Output: 2
