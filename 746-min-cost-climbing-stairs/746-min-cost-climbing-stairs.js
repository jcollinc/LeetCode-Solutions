/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let minimumCost = Array(cost.length + 1).fill(0)
    for (let i = 2; i < minimumCost.length; i++) {
        minimumCost[i] = Math.min(minimumCost[i-1] + cost[i-1], minimumCost[i-2] + cost[i-2])
    }
    return minimumCost.pop()
};
