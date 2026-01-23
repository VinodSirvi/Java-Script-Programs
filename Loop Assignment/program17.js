//Print Fibonacci series up to n terms.
let n = 10;
let num1 = 0;
let num2 = 1;
let num3 ;
console.log(num1)
console.log(num2)
for(let i=2; i<=n; i++) {
    num3 = num1+num2;
    console.log(num3)
    num1 = num2
    num2 = num3
    
}

