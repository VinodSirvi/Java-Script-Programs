// reverse a string 
let str = "javascript";
let arr = str.split('');
console.log(arr)
let revStr = "";
for(let i=arr.length-1; i>=0; i--){
      revStr = revStr + arr[i];
}
console.log(`reverse string of ${str} is => ${revStr}`)


// palindrome
let str2 = "madam";
let arr2 = str2.split('');
let revStr2 = "";
for(let i=arr2.length-1; i>=0; i--){
    revStr2 += arr2[i];
}
if(revStr2 == str2) console.log(`${str2} is palindrome`)
else console.log(`${str2} is not palindrome`);




//count vowels in a String 
let str3 = "programming"

let arr3 = str3.split('');

let count =0 ;
for(let i=0; i<arr3.length; i++) {
    
    if(arr3[i] == 'a' || arr3[i] == 'e' || arr3[i] == 'i' || arr3[i] == 'o' || arr3[i] == 'u' ) {

        count ++;
    }
}
   console.log(`vowels count in - ${str3} => ${count}`);



//  count constant in a string 

let str4 = "javascript";

let arr4 = str4.split("");

let count1 = 0;
for (let i = 0; i < arr4.length; i++) {
  if (
    !(arr4[i] == "a" ||
    arr4[i] == "e" ||
    arr4[i] == "i" ||
    arr4[i] == "o" ||
    arr4[i] == "u")
  ) {
    count1++;
  }
}
console.log(`constant count in - ${str4} => ${count1}`);

//remove all spaces from string 
let str5 = "hello world javascript";
let str6 ="";
for(let i=0; i<str5.length; i++){
    if(str5.charAt(i) !=" "){
         str6 = str6+str5.charAt(i);
    }
}

console.log(str6);


//Convert first letter of each word to uppercase 
let str7 ="javascript is powerful"
let arr7 =str7.split(" ");

let emptyStr = "";
for(let i=0; i<arr7.length; i++){
    emptyStr +=  arr7[i].charAt(0).toUpperCase();

    for(let j=1; j<arr7[i].length; j++){
      emptyStr += arr7[i].charAt(j);
    }

    emptyStr += " "
}

console.log(emptyStr);

//convert entire string to lowercase without using toLowerCase()
function LowerFun(str){
  
  let newStr = "";

  for(let i=0; i<str.length; i++){
       
     let code = str.charCodeAt(i);
      
     if(code >= 65 && code<=90) {
        code += 32;
     }
     
    newStr += String.fromCharCode(code);
       
  }

  return newStr;
}

let upperString = "HELLO WORLD!"
let MyFun = LowerFun(upperString);

console.log(MyFun);

// find the longest word in a sentence 

function LongestStr(str){

  let arr = str.split(" ");
   let large =0 ;
  let a = 0;
  for(let i=0; i<arr.length; i++){
         
   if(arr[i].length > large) {

    large = arr[i].length; 

    a = i;
   }

  }
    return arr[a];
}

let MyString1 = "HELLO JAVASCRIPT";
let myfu = LongestStr(MyString1);
console.log(myfu);


// find the shortest word in a sentence 

function smallStr(str){
let arr =str.split(" ");

  let small = Infinity;
  let a = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i].length < small){
      small = arr[i].length;

      a = i;
    }

  }

  return arr[a];
}
console.log(smallStr("hello a is javascript"))


// count occurance of a specific character 

let myFunction = (str)=>{
      let count =0;
      let target = "g"
      for(let i=0; i<str.length; i++){
        if(str.charAt(i) == target){
          count++;
        }
      }

      return count;
}
console.log(myFunction("programming"))


// remove duplicate character from a string 

let f2 = (str)=>{
     
  let emptyStr ="";
  for(let i=0; i<str.length; i++){
       if(!(emptyStr.includes(str.charAt(i)))){
        emptyStr += str.charAt(i);
       }
  }
  return emptyStr;
}

console.log(f2("Programming"))


// find first non repeating character 
let str8 = "programming"
let empStr2 = "";
for(let i=0; i<str8.length; i++){
  
  empStr2 += str8.charAt(i);
    for(let i=1; i<str8.length; i++ ){
      
    }


}


// find first repeating chartacter 

function hitesh(str){
    
    for(let i=0; i<str.length; i++){
      for(let j = 0;j<str.length;j++){
        if(i != j && str[i] == str[j]){
          return str[i];
        }
      }
    }
    return " ";
}
let a = "javascript"
console.log(hitesh(a));

// replace all vowels with *

function vinod(str){
    
      for(let i=0; i<str.length; i++){
        if(str.charAt(i)=="a" || str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u" ){

        str = str.replace(str.charAt(i),"*");
        }
      }
     
     return str;
}
let s = "healio"
console.log(vinod(s));
// let s1 = "hello"

// console.log(s1[0]);


// reverse word in a sentence 
str1 = "hitesh is a good boy"
let Arr1 = str1.split(" ").reverse().join(" ");
console.log(Arr1);


// check if two string are anagram

function hitesh1(str1 , str2){
  str1.toLowerCase();
  str2.toLowerCase();

  if(str1.includes(" ") && str2.includes(" ")){
    str1.replace(" ","")
    str2.replace(" ","")
  }

  let arr1 = str1.split('');
 let arr2 =  str2.split('')

arr1.sort()
arr2.sort()

let newArr = arr1.join(" ");
let newArr1 =  arr2.join(" ");

if( newArr == newArr1){
  console.log("anagram");
  
}

else console.log("not anagram")

}

hitesh1("listen","silent")


// count word in a sentence 
function ajay(str){
let arr = str.split(" ");
let count = 0; 
for(let i=0; i<arr.length; i++){
   count++;
}
return count;
}

console.log(ajay("hello i am ajay"))


// remove special characters 
function mohit(str){
  for(let i=0; i<str.length; i++){
   let newStr = "";
   for(let i=0; i<str.length; i++){
    let code = str.charCodeAt(i);
    let a = str.charAt(i);
    if(!(code >=65 && code <=90 || code >=97 && code <=122) && !(a >= 0 && a <= 9)){
     
      str = str.replace(str.charAt(i),"")
    }
   }
  }
  return str; 
}

console.log(mohit("hello@!wor#%12334"))


//find the index of first vowel

function vowel(str){
    for(let i=0; i<str.length; i++){
      if (
        str.charAt(i) == "a" ||
        str.charAt(i) == "e" ||
        str.charAt(i) == "o" ||
        str.charAt(i) == "u" ||
        str.charAt(i) == "i"
      ) {
               
          return i
      }
    }
}
console.log(vowel("abc"))


function hitesh3(str){
  let newStr = ""
  let code ;
  for(let i=0; i<str.length; i++){
    code = str.charAt(i)
    if(code >=0 && code <=9){
       newStr += str.charAt(i);
    }
  }
  return newStr ;
}

console.log(hitesh3("helo1234"))

// longest word in a sentence 
let str20 = "javascript is a very bad language"
let arr5 = str1.split(" ");
console.log(arr5)

let arr16 = [1,2,3,4,5]
let arr17 = [3,4,5,6,7]

let arr18 = arr16.concat(arr17)
console.log(arr18)

for(let i=0; i<arr18.length; i++){
  for(let j=0; j<arr18.length; j++){
  if(i!=j && arr[i] == arr[j]){
    console.log(arr18[i])
  }
  }
}