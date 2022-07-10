/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let minimumCost = []
    for (let i = 0; i <= cost.length; i++) {
        minimumCost.push(0)
    }
    for (let i = 2; i < minimumCost.length; i++) {
        minimumCost[i] = Math.min(minimumCost[i-1] + cost[i-1], minimumCost[i-2] + cost[i-2])
    }
    console.log(minimumCost)
    return minimumCost.pop()
};

[10,15,20, 50, 55, 43, 23, 21, 31]