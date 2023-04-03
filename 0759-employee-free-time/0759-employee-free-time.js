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
    let allIntervals = []
    for (let empSchedule of schedule) {
        for (let interval of empSchedule) {
            allIntervals.push(interval)
        }
    }
    allIntervals.sort((a,b) => a.start - b.start)
    let output = [], nextEnd = allIntervals[0].end
    for (let interval of allIntervals) {
        if (interval.start > nextEnd) output.push(new Interval(nextEnd, interval.start))
        nextEnd = Math.max(nextEnd, interval.end)
    }
    return output
};