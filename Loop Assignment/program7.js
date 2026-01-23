//7. Count numbers divisible by 3 between 1 and 100.

let n = 100; 
let count=0;
for(let i=1; i<=n; i++) {

    if(i%3 ==0) {
        count++;
    }

}

console.log(count);