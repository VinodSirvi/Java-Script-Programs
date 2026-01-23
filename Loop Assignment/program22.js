//Find GCD of two numbers.
let num1 = 20;
let num2 =10;
let num3 = 0;
for(let i=1; num1>=i && num2>=i; i++) {

    if(num1%i ==0 && num2%i ==0) {
        num3=i;
    }
}
console.log(num3);