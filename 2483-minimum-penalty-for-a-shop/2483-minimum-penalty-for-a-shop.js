/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let dp = new Array(customers.length + 1)
    dp[0] = customers.split("").filter((char) => char === 'Y').length
    let min = dp[0], output = 0
    for (let i = 1; i < dp.length; i++) {
        dp[i] = dp[i-1] + (customers[i-1] === "Y" ? -1 : 1) 
        if (dp[i] < min) {
            min = dp[i]
            output = i
        }
    }
    return output
};