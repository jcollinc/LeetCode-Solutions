/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = nums.reduce((a,b) =>a+b), idx = 0, leftSum = 0, rightSum = total
    for (let i = 0; i <= nums.length; i++) {
        let curr = nums[i];
        rightSum -= curr;
        if (leftSum === rightSum) return i;
        leftSum += curr;
    }
    return -1
};