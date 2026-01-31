let arr = [1,2,3,4,5]

// push()
arr.push(6);
console.log(arr);

// pop()
arr.pop(6)
console.log(arr);

// unshift() add elements in starting 
arr.unshift(0);
console.log(arr);

//shift() remove elements from starting 
arr.shift(0);
console.log(arr);

//indexOf()
console.log(arr.indexOf(4));

//includes()
console.log(arr.includes(1));
console.log(arr.includes(7));

//concat()
let arr2 = [6,7,8,9]
let newArr= arr.concat(arr2);
console.log(newArr);

// forEach()
newArr.forEach( (val)=> {
    console.log(val);
})

// sort()
let arr3 = [4,7,2,7,1,8,4]
let sortedArr = arr3.sort();
console.log(sortedArr);

// reverse()  original array ko change kar dega 

let reverseArr = arr2.reverse();
console.log(reverseArr);

// slice()
let sliceArr = arr.slice(2,5)
console.log(sliceArr);
console.log(arr)

//splice() original array me se selected indexed elements ko remove kar dega 
let arr4 = [10,20,30,40,50]
 arr4.splice(2,5);
 console.log(arr4);

 //toString()
 

// methods used with function ==================================

//map() 
let mapArr = arr.map( (val)=> val*2);
console.log(mapArr)

//filter()
let filterArr = arr.filter(function (val) {
    return val >=3;
})
console.log(filterArr);

//some() true and false ( one conditon should be true else false output)
let someArr = arr.some((val) => {
    return val > 1 ;
})

console.log(someArr);

// every() all condition should be true esle false output  
let everyArr = arr.every((val) => {
    return val >2;
})

console.log(everyArr);

//reduce() multiple inputs but return only one single output 
let reduceArr = arr.reduce((val) => {
    return val * 3 ; 
})
console.log(reduceArr);

// find()
let findArr = arr.find((val)=> {
    return val > 3
})
console.log(findArr);

//findIndex()
let findIndex = arr.findIndex((val) => {
    return val > 4;
})
console.log(findIndex);

//==============================================================

// for of loop ( elements dega ) works on both array and string 

for(let value of arr){
    console.log(value)
}

// for in loop  (index value dega ) works on array and string 

for(let value in arr){
    console.log(value)
}

