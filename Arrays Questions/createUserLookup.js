//Create a lookup object from an array of users
function createUserLookup(users) {
  let lookup = {};
  for (let user of users) {
    lookup[user.id] = user;
  }
  return lookup;
}

// Example
let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Ravi" },
];

console.log(createUserLookup(users));
