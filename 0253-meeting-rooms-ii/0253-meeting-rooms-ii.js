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
        for (let i = 0; i < rooms.length; i++) {
            if (start >= rooms[i]) {
                rooms[i] = end
                return
            } 
        }
        rooms.push(end)
        count++
        console.log(rooms)
    }
    
    return count
};