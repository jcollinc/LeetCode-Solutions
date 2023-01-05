/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let minCosts = [0,0]
    for (let i = 2; i <= cost.length; i++) {
        minCosts[i] = Math.min(cost[i-2] + minCosts[i-2], cost[i-1] + minCosts[i-1])
    }
    return Math.min(minCosts[minCosts.length - 1])
};