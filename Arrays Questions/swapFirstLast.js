//Swap first and last elements
function swapFirstLast(arr) {
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}

console.log(swapFirstLast([10, 20, 30, 40]));
// Output: [40, 20, 30, 10]
