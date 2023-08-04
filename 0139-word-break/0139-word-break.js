/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length+1).fill(false)
    dp[0] = true
    for (let i = 0; i < s.length; i++) {
        if (dp[i] === true) {
            for (let word of wordDict) {
                let candidate = s.slice(i, i + word.length)
                if (word === candidate) dp[i + word.length] = true
            }
        }
    }
    console.log(dp)
    return dp[dp.length-1]
};