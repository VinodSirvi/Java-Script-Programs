//Find the shortest word using reduce()
function shortestWord(arr) {
    return arr.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    });
}

console.log(shortestWord(["java", "javascript", "js"]));
// Output: "js"
