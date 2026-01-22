//Capitalize the first letter of each word
function capitalizeWords(arr) {
    let result = [];
    for (let word of arr) {
        result.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return result;
}

console.log(capitalizeWords(["java", "script", "array"]));
// Output: ["Java", "Script", "Array"]
