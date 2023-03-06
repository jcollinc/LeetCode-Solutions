/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let res = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        let last = res.length - 1
        if (intervals[i][0] <= res[last][1]) {
            res[last][1] = Math.max(intervals[i][1], res[last][1])
        } else res.push(intervals[i])
    }
    return res
};