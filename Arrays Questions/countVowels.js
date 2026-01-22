//Count total vowels in an array of strings
function countVowels(arr) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let word of arr) {
        for (let ch of word) {
            if (vowels.includes(ch)) {
                count++;
            }
        }
    }
    return count;
}

console.log(countVowels(["apple", "banana"]));
// Output: 5
