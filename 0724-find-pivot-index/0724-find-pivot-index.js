/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let rightSum = nums.reduce((a,b) =>a+b), leftSum = 0
    for (let i = 0; i <= nums.length; i++) {
        let curr = nums[i];
        rightSum -= curr;
        if (leftSum === rightSum) return i;
        leftSum += curr;
    }
    return -1
};