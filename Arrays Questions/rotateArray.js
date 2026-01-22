//Rotate array to the right by 1
function rotateRight(arr) {
    let last = arr.pop();
    arr.unshift(last);
    return arr;
}

console.log(rotateRight([1, 2, 3, 4]));
// Output: [4,1,2,3]
