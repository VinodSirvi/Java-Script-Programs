// Array to CSV
function arrayToCSV(arr) {
    let csv = "";
    for (let i = 0; i < arr.length; i++) {
        csv += arr[i];
        if (i < arr.length - 1) {
            csv += ",";
        }
    }
    return csv;
}

// Example
console.log(arrayToCSV(["java", "js", "html"]));
// Output: java,js,html
