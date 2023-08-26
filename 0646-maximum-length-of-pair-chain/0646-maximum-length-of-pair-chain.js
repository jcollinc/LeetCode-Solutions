/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    if (pairs.length === 0) {
        return 0;
    }
    pairs.sort((a, b) => a[0] - b[0]);
    const dp = new Array(pairs.length).fill(1);
    let maxLen = 1;
    for (let i = 1; i < pairs.length; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                maxLen = Math.max(maxLen, dp[i]);
            }
        }
    }
    return maxLen;
};