/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = [Infinity, Infinity]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target && nums[i-1] !== target) {
            res[0] = i
            while (nums[i] === target) {
                i++
            }
            res[1] = i - 1
            break
        }   
    }
    if (res[0] === Infinity) return [-1, -1]
    else return res
};