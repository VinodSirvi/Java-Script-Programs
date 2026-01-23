//Print prime numbers between 1–100.
let n = 100;

for(let i=2; i<=n; i++){
   let count = 0;
    for(let j=1; j<=i; j++) {
        if(i%j==0){
            count++;
        }
    }

    if(count==2){
        console.log(i)
    }
}