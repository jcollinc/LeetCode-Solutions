/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0
    for (let account of accounts) {
        max = Math.max(max, account.reduce((a,b) => a + b))
    }
    return max
};