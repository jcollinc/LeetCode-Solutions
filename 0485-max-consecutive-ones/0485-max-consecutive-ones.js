/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxConsec = 0, consec = 0
    for (let num of nums) {
        if (num === 1) {
            consec++
            maxConsec = Math.max(maxConsec, consec)
        } else {
            consec = 0
        }
    }
    return maxConsec
};