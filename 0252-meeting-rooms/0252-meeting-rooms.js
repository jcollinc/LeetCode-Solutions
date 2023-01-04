/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (!intervals.length) return true
    intervals.sort((a, b) => a[0] - b[0])
    console.log(intervals)
    let end = intervals[0][1]
    for (let meetingIdx = 1; meetingIdx < intervals.length; meetingIdx++) {
        if (intervals[meetingIdx][0] < end) return false
        end = intervals[meetingIdx][1]
    }
    return true
};