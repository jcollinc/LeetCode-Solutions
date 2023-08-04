/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length+1).fill(false)
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || dp[i] === true) {
            for (let word of wordDict) {
                if (s.slice(i, i + word.length) === word) dp[i + word.length] = true
            }
        }
    }
    return dp[dp.length-1]
};