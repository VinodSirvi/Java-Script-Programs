//Find all words starting with a vowel
function wordsStartingWithVowel(arr) {
    let result = [];
    let vowels = "aeiouAEIOU";

    for (let word of arr) {
        if (vowels.includes(word.charAt(0))) {
            result.push(word);
        }
    }
    return result;
}

console.log(wordsStartingWithVowel(["apple", "banana", "orange"]));
// Output: ["apple", "orange"]
