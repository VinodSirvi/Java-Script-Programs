//Sort strings by length
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["apple", "kiwi", "banana"]));
// Output: ["kiwi", "apple", "banana"]
