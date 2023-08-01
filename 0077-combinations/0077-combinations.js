/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let combinations = []
    let combination = []
    const getCombination = (curr) => {
        if (combination.length === k) {
            combinations.push([...combination])
            return
        }
        for (let i=curr; i <= n; i++) {
            combination.push(i)
            getCombination(i+1)
            combination.pop()
        }
    }
    getCombination(1)
    return combinations
};