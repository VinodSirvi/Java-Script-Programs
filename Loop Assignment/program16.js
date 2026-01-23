// Check if a number is palindrome using a loop.
let n =122
let temp = n;
let rev = 0;
while(n>0) {
    let digit = n%10;
    rev = rev*10+digit;
    n = (n-digit)/10;
}
if(temp == rev) {
    console.log("palindrome");
}
else console.log("not palindrome");