/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function(schedule) {
    let intervals = schedule.reduce( (a,b) => [...a, ...b]).sort( (a,b) => a.start - b.start )
    let output = [], nextEnd = intervals[0].end
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i].start > nextEnd) output.push(new Interval(nextEnd, intervals[i].start))
        nextEnd = Math.max(nextEnd, intervals[i].end)
    }
    return output
};