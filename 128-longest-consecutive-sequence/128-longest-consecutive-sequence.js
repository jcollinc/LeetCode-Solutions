/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0
    nums.sort((a, b) => a - b)
    let res = {}
    let first = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1] + 1 && nums[i] !== nums[i - 1]) {
            res[nums[i]] = 1
            first = nums[i]
        } else if (nums[i] === nums[i-1]) {
            continue
        } else {
            res[first] += 1
        }   
    }
    let resArr = Object.values(res)
    return Math.max(...resArr)
};