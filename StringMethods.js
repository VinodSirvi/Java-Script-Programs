
let string = "  Hello_World  ";

// 1. .length() 
console.log(string.length);

//2. toUpperCase() 
console.log(string.toUpperCase());

//3. toLowerCase()
console.log(string.toLowerCase());

//4. charAt(
console.log(string.charAt(7));

//slice()
console.log(string.slice(2,5));

//trim()
console.log(string.trim());

//TrimStart()
console.log(string.trimStart());

//trimEnd()
console.log(string.trimEnd())
//padStart()
console.log(string.padStart(20,0));

// padEnd()
console.log(string.padEnd(25,1));

//repeat()
console.log(string.repeat(3))

//replace(
console.log(string.replace("o" , "O"))

// replaceAll
console.log(string.replaceAll("o","Z"));

//split()
console.log(string.split('_'));
console.log(string.split(''));
console.log(string.split(' '));

//substring() 3 se 8 index ke beach ke char 
console.log(string.substring(3,8));

//substr() 3rd index se 6 char ko return karo 
console.log(string.substr(3,6));

//indexOf()
console.log(string.indexOf('_'));


//lastIndexOf()
console.log(string.lastIndexOf('o'));

//includes()
console.log(string.includes("Hello"));
console.log(string.includes("2"));

//startWith(
console.log(string.startsWith("H"));

// endWith()
console.log(string.endsWith(" "));

//Concat()
console.log(string.concat("good job"));
