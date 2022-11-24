/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let ref = new Map()
  for (let i = 0; i < nums.length; i++) {
    ref.set(nums[i], i) 
  }
  for (let i = 0; i < nums.length; i++) {
    let check = target - nums[i]
    if (ref.get(check) && ref.get(check) !== i) return [ref.get(check), i]
  }
}