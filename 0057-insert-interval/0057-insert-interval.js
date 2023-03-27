/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let left = [], right = [], start = newInterval[0], end = newInterval[1]
    for (let interval of intervals) {
        let curr0 = interval[0], curr1 = interval[1]
        if (curr1 < start) left.push(interval)
        else if (curr0 > end) right.push(interval)
        else {
            start = Math.min(start, curr0)
            end = Math.max(end, curr1)
        }
    }
    return [...left, [start, end], ...right]
};