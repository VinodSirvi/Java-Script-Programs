
// Number Coersion

console.log("10"-5);                                                  
console.log("10" *"2")
console.log("50" / []);
console.log("1" + -1);
console.log(+"100");
console.log("Infinity" * 0);
console.log("1.5" % 1);
console.log(+"0xf");
console.log(10 - null);
console.log(10 * undefined);

// String Coercion and String Concetination

console.log("hello" + 5);
console.log(1 + 2 + "3");
console.log("3" + 2 + 1);
console.log("Result: " + true);
console.log([] + 1 + 2);
console.log("a" + {});
console.log("100" + null);
console.log(undefined + " World");
console.log(function () {} + " is a function");
console.log(5 + 5 + "a" + 5 + 5);

//Boolean Coersion (true and false)

console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("false"));


//Loose Equality (==) Coercion (31–40)
//Determine if the following loose equality comparisons
//evaluate to true or false.

console.log(1 == true);
console.log("0" == false);
console.log(null == undefined);
console.log(0 == null);
console.log("" == 0);
console.log("1" == true);
console.log("1" == [1]);
console.log([] == 0);
console.log(!0 == true);
console.log([1, 2] == "1,2");

//Explicit Conversions (Conversion Methods) (41–50)

console.log(Number(false));
console.log(String(NaN));
console.log(parseInt("42px", 10));
console.log(parseFloat("3.14159"));
console.log(Boolean("0"));
console.log((100).toString(16));
console.log(Number(""));
console.log(String(null));
console.log(Boolean(NaN));
console.log(Boolean(NaN));
