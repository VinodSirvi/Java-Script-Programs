//Extract even indexed elements
function evenIndexElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(evenIndexElements([10, 20, 30, 40, 50]));
// Output: [10, 30, 50]

