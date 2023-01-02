/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numCount = {}
    let max = [0,0]
    for (let num of nums) {
        numCount[num] = 1 + (numCount[num] || 0)
        if (numCount[num] > max[1]) {
            max[0] = num
            max[1] = numCount[num]
        }
    }
    return max[0]
};