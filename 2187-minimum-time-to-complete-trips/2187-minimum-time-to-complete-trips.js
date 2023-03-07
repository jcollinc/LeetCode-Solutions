/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(times, totalTrips) {
    let left = 1, right = Math.max(...times) * totalTrips
    while (left < right) {
        let mid = Math.floor((left + right) / 2), completed = 0
        for (let time of times) {
            completed += Math.floor(mid / time)
        }
        if (completed < totalTrips) left = mid + 1
        else if (completed >= totalTrips) right = mid
    }
    return left
};