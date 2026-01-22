//Find the longest word using reduce()
function longestWord(arr) {
    return arr.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    });
}

console.log(longestWord(["java", "javascript", "js"]));
// Output: "javascript"
