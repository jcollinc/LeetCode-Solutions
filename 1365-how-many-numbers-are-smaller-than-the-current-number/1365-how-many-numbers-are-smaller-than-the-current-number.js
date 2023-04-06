/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let output = []
    for (let i = 0; i < nums.length; i++) {
        let num = 0
        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue
            if (nums[j] < nums[i]) num++
        }
        output[i] = num
    }
    return output
};