/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let count = 0
  let len = nums.length
  for (let i = 0; i < nums.length;) {
      if (nums[i] !== val) {
          nums.unshift(nums[i])
          i++
          count++
      }
      i++
    }
  return count
};