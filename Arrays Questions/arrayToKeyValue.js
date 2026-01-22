//Convert array into key–value pairs
function arrayToKeyValue(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
}

// Example
console.log(
  arrayToKeyValue([
    ["name", "Vinod"],
    ["age", 22],
  ])
);
// Output: { name: "Vinod", age: 22 }
