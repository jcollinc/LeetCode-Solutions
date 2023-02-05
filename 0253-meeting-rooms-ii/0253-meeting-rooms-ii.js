/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]) 
    let rooms = [], count = 0
    for (let meeting of intervals) {
        roomFinder(meeting[0], meeting[1])
    }
    return count
    function roomFinder(start, end) {
        for (let room of rooms) {
            if (start >= room[1]) {
                room[0] = start
                room[1] = end
                return
            } 
        }
        rooms.push([start, end])
        count++
    }
    return count
};