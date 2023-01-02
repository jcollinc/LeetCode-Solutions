/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let numCount = {}
    let majority = Math.ceil(nums.length / 2)
    for (let num of nums) {
        numCount[num] = 1 + (numCount[num] || 0)
        if (numCount[num] === majority) return num
    }
    return 0
};