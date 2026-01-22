//Group numbers into even and odd
function groupEvenOdd(arr) {
    return arr.reduce((acc, num) => {
        if (num % 2 === 0) {
            acc.even.push(num);
        } else {
            acc.odd.push(num);
        }
        return acc;
    }, { even: [], odd: [] });
}

console.log(groupEvenOdd([1, 2, 3, 4]));
// Output: {even:[2,4], odd:[1,3]}
