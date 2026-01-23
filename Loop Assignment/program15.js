//Count digits in a number.
let n = 12345;
let count = 0;

while(n>0) {
    let digit = n%10;
    n = (n-digit)/10
    count++
}
console.log(count)