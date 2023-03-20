/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(v) {
    v.sort((a,b) => a[0] - b[0])
    let res = [v[0]]
    for (let i = 1; i < v.length; i++) {
        let last = res.length - 1
        if (v[i][0] <= res[last][1]) {
            res[last][1] = Math.max(v[i][1], res[last][1])
        } else res.push(v[i])
    }
    return res
};