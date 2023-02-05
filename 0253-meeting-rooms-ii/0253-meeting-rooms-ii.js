/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let rooms = []
    for (let meeting of intervals) {
        roomFinder(meeting)
    }
    function roomFinder(meeting) {
        for (let room of rooms) {
            if (meeting[0] >= room[1]) {
                room[0] = meeting[0]
                room[1] = meeting[1]
                return
            }
        }
        rooms.push(meeting)
    }
    return rooms.length
};