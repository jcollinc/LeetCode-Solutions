/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let output = []
    for (let i = 0; n < nums.length; i++, n++) {
        output.push(nums[i])
        output.push(nums[n])
    }
    return output
};