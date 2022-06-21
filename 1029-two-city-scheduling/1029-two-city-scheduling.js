/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let ARelCosts = []
    let res = []
    
    for (let i = 0; i < costs.length; i++) {
        ARelCosts[i] = [i, costs[i][0] - costs[i][1]]
    }
    
    ARelCosts.sort((a, b) => a[1] - b[1])
    ARelCosts.length = costs.length / 2
    
    for (let arr of ARelCosts) {
        res.push(costs[arr[0]][0])
        costs[arr[0]] = [0, 0]
    }
    
    for (let i = 0; i < costs.length; i++) {
        if (costs[i][1] !== 0) {
            res.push(costs[i][1])
        }
    }
    console.log(ARelCosts)
    return res.reduce((a, b) => a + b)
};