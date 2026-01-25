// check if a number is positive , negative or zero 

let a = 5;
if(a>0) {
    console.log('positive');
}
else if(a<0){
    console.log('negative');
}
else console.log("zero");

// =============================================================================
// check if a number is even or odd (no % operator)

let b = 10;
let i =0;
while(i<b) {
     i+=2;
}

let remainder = b - i;
if(remainder == 0) {
    console.log("even");
}
else console.log("odd");
//==============================================================================
// prime number
let d = 7;
let count=0;
for(let i=1; i<=d; i++) {
    if(d%i==0){
        count++;
    }

}
if(count==2) {
    console.log("prime");
} 
else console.log("not a prime");

//================================================================================
// palindrome
let e = 141
let temp =e;
let rev =0;

while(e>0) {
    let digit = e%10;
    rev = rev*10+digit;
    e = (e-digit)/10;
}

if(rev == temp){
    console.log("palindrome");
}
else console.log("not palindrome");
//==============================================================================
//print numbers 1 -100 but replace.

let number =100;
for(let i=1; i<=100;i++) {
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
   else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0) {
        console.log("Buzz");

    }
   else console.log(i);
}
 //=============================================================================