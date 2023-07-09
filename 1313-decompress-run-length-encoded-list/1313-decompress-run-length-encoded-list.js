/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let output = [], count
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            count = nums[i]
        } else {
            while (count > 0) {
                output.push(nums[i])
                count--
            }
        }
    }
    return output
};