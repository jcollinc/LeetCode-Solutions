/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let leftSum = [0], rightSum = [0]
    for (let i = 0; i < nums.length - 1; i++) {
        leftSum.push(leftSum[i] + nums[i])
    }
    for (let i = nums.length - 1; i > 0; i--) {
        rightSum.unshift(rightSum[0] + nums[i])
    }
    for (let i = 0; i < nums.length - 1; i++) {
        leftSum[i] = Math.abs(leftSum[i] - rightSum[i])
    }
    return leftSum
};