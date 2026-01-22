//Find the average age of users
function averageAge(users) {
    let total = 0;
    for (let user of users) {
        total += user.age;
    }
    return total / users.length;
}

// Example
let people = [
    { age: 20 },
    { age: 30 },
    { age: 40 }
];

console.log(averageAge(people));
// Output: 30
