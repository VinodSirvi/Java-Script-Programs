//Find the sum of digits of a number.
let n = 12345
let sum =0;

while(n>0) {
    let digit = n%10;
    sum = sum+digit;
    n = (n-digit)/10;
}
console.log(sum);