//Group strings by their length
function groupByLength(arr) {
    return arr.reduce((acc, word) => {
        let len = word.length;
        if (!acc[len]) {
            acc[len] = [];
        }
        acc[len].push(word);
        return acc;
    }, {});
}

console.log(groupByLength(["java", "js", "html"]));
// Output: {2:["js"],4:["java","html"]}

