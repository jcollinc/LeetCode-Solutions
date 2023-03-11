/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = nums.reduce((a,b) =>a+b), idx = 0, leftSum = 0, rightSum = total
    while (idx < nums.length) {
        leftSum += (nums[idx-1] || 0)
        rightSum -= nums[idx]
        idx++
        if (leftSum === rightSum) break
    }
    return leftSum === rightSum ? idx - 1 : -1
};