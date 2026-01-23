//Count even and odd digits in a number.
let n = 1234567
let evenCount = 0;
let oddCount = 0;

while(n>0) {
    let digit = n%10;
    if(digit%2 ==0) {
        evenCount++;
    }
    else oddCount++;

    n = (n-digit)/10;
}
console.log('even count'+evenCount);
console.log("odd count" + oddCount);