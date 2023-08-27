/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const n = stones.length;
    const dp = new Array(n).fill(0).map(() => new Set());
    dp[0].add(0);
    
    for (let i = 0; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            const distance = stones[i] - stones[j];
            if (dp[j].has(distance - 1) || dp[j].has(distance) || dp[j].has(distance + 1)) {
                dp[i].add(distance);
            }
        }
    }
    return dp[n - 1].size > 0; 
};
