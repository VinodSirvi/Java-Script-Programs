let string = "hello world";
let arr = [1,2,3,4,5];

// 1. named function 
// A function that has its own name when declared. It’s easy to reuse and debug because the name shows up in error messages or stack traces.

function hello(name) {
    console.log("hello "+name);
}
hello("vinod");

// named with default parameter 
function hi(name ="vinod") {
    console.log("hi "+name);
}
hi();

// function using return 
function good(a,b){
     return a+b;
}
let result = good(10,20);
console.log(result);

//======================================================

//2. Anonymous Function
//A function that does not have a name. It is usually assigned to a variable or used as a callback. Since it has no name, it cannot be called directly.

let greet = function() {
    return "helllo";
}
console.log(greet());

//====================================================

//3. function Expression 
// When you assign a function (can be named or anonymous) to a variable. The function can then be used by calling that variable.

let functionVariable = function myFunc(a,b){
        return a+b;
}
console.log(functionVariable(20,20));


//=====================================================

//4.Arrow Function ES6
//A new way to write functions using the => syntax. They are shorter and do not have their own this binding, which makes them useful in some cases.

const arrow1 = (a,b) => a*b;
console.log(arrow1(2,3));

let arrow2 = (name) => {
    return "hello"+name;
}
console.log(arrow2("vinod"));

//====================================================

//5. Immediately Invoked Function Expression (IIFE)
// IIFE functions are executed immediately after their definition. They are often used to create isolated scopes.

(function () {
    console.log("hey good job");
})();

(function() {
    console.log("nice");
})();

//==================================================

//6. Callback Functions
//A callback function is passed as an argument to another function and is executed after the completion of that function.



function myFun(a , callback) {
    return callback(a);
}

let varA = (a) => a*a;

console.log(myFun(5,varA));



function abc () {
    return "hello" ;
}

function rrr(callback) {
    return callback;
} 
console.log(rrr(abc()));

 

//==================================================

//7. Async Function
//Functions that handle asynchronous tasks. Declared with async, they return a Promise, and you can use await inside them to pause until another Promise resolves.

async function fetchData() {
  return "Data fetched!";
}
fetchData().then(console.log); // Data fetched!

//===================================================

//8. Generator Function 
//Declared with an asterisk *, these functions can pause execution using yield and resume later. Useful for lazy loading values or handling iterator

function* myGenFun() {
    yield 1;
    yield console.log("hello generator function ");
    yield 3;
}

let gen = myGenFun();
console.log(gen.next().value);
console.log(gen.next().value);

//===================================================

//9. Recursive Function
//A function that calls itself until a condition is met. Very useful for problems like factorial, Fibonacci, or tree traversals.

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

//=================================================

//10. higher order function 

