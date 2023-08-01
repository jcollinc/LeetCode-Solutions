/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const combinations = [];
    const combo = [];
    function backtrack(start) {
        if (combo.length === k) {
            combinations.push([...combo]);
            return;
        }
        for (let i = start; i <= n; i++) {
            combo.push(i);
            backtrack(i+1);
            combo.pop();
        }
    }
    backtrack(1);
    return combinations;    
};