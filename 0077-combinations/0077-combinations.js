/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let combinations = []
    const getCombination = (curr, combination) => {
        if (combination.length === k) {
            combinations.push([...combination])
            return
        }
        for (let i = curr+1; i <= n; i++) {
            getCombination(i, [...combination, i])
        }
        return
    }
    for (let i = 1; i <= n; i++) {
       getCombination(i,[i]) 
    }
    return combinations
};