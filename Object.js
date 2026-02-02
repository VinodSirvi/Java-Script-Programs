// object 
// type 1 of declaration 

let obj = {
    name : "vinod",
    id : 100
};
console.log(obj);

// type 2 of declaration using new keyword 
let obj1 = new Object()

// key and value adding ( type 1)
obj1.name = "hitesh"
obj1.id = 101
console.log(obj1);

// value updating 
obj1.name = "good"
console.log(obj1);

// value add and update ( type 2)
obj1["subject"] = "java script"
obj1["id"] = "103"
console.log(obj1);

// delete value 
delete obj1.name;
console.log(obj1);

console.log({}=={})
console.log([]==[])


// creating object using function 
function user(name , age){
    this.name1 = name ;
    this.age1 = age;
}
   // constructor
let abc = new user("abc" , 30)
console.log(abc);


// function in object ( object method)

const user2 = {
    name : "abc",
    xyz:()=>{                // this is not using with arrow 
        return 
    }
}
console.log(user2.xyz());

// for in loop for object 

let obj3 = {
    name : "vinod",
    age: 21,
    email:"abc@gmail.com",
    contact : 987654321
}

// for in loop ( for iterating in object and provide keys )
for(let key in obj3){
    console.log(key , obj3[key])
}

// object method 
let a = Object.keys(obj3)      // object ki keys ko array me daal dega
console.log(a);

let b = Object.keys(obj3).length   // length batayega
console.log(b);

let c = Object.values(obj3)   // values ko array me daal dega 
console.log(c);

let d = Object.entries(obj)  // ek array ke andar key and values ka seperate 
                               // array banata jayega 
console.log(d);

// nested object 

let obj4 = {
  name: "vinod",
  age: 21,
  email: "abc@gmail.com",
  contact: 987654321,
  
  address: {
    city: "jaipur",
    pincode : 123456,

  }
};

console.log(obj4.address.city);



// to check whether a key is in object or not 

console.log("contact" in obj4);
console.log(obj4.hasOwnProperty("name"));


// to merge two objects in javascript 

// way 1 (spread operator)
const merge = {...obj3 , ...obj4}
console.log(merge);

// way 2 (Assign)
let obj5 = Object.assign({},obj1 , obj3);
console.log(obj5);

// if multiple objects contain same keys then the key updated with the last value assigned to the key in the object 
o = {
    a:10,
    b:20,
    
};

o1 = {
    a:20,
    b:22,
    c:34
};

o2 = {
    c:11,
}

const ob = {...o , ...o1, ...o2}
console.log(ob)

// freeze 
Object.freeze(o);
o.a = 33;
delete o.b;
console.log(o);


// seal (can update the value )
Object.seal(o1);
o1.a = 234;
console.log(o1);

// is frozen and is sealed (check if object is freeze or not and sealed or not )
console.log(Object.isFrozen(o))
console.log(Object.isSealed(o1))

// convert object to array 

let objPractice = {
      
    name : "vinod",
    id: 100,
}

let obj10 =Object.entries(objPractice);
console.log(obj10);


// convert array to object 
// fromEntries --> object array ko wapis object me convert kar dega

console.log(Object.fromEntries(obj10));

let empobj = {};

let len = Object.keys(empobj).length;

if(len ==0){
    console.log(true)
}
else console.log("false");


