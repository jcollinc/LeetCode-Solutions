/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let minRooms = 1, ends = [intervals[0][1]]
    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i]
        let freeRoom = false
        for (let j = 0; j < ends.length; j++) {
            if (interval[0] >= ends[j]) {
                freeRoom = true
                ends[j] = interval[1]
                break
            }
        }
        if (!freeRoom) {
            minRooms++
            ends.push(interval[1])
        }
    }
    return minRooms
};