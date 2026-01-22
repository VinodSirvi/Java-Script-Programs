// Convert prices to GST-inclusive prices (18%)
function addGST(prices) {
    let result = [];
    for (let i = 0; i < prices.length; i++) {
        let gstPrice = prices[i] + prices[i] * 0.18;
        result.push(Number(gstPrice.toFixed(2)));
    }
    return result;
}

console.log(addGST([100, 200, 50]));
// Output: [118, 236, 59]
