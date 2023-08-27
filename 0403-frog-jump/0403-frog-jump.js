/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    let n = stones.length;
    let dp = new Array(n).fill(false).map(() => new Array(n).fill(false));
    dp[0][0] = true; 
    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            let step = stones[i] - stones[j];
            if (step <= j + 1) {
                dp[i][step] = dp[j][step - 1] || dp[j][step] || dp[j][step + 1];
                if (i === n - 1 && dp[i][step]) {
                    return true; 
                }
            }
        }
    }
    return false;
};
