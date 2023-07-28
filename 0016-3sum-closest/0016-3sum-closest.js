/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let smallestDiff = Infinity, closestSum = 0
    nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length; i++) {
        let left = 0, right = nums.length-1
        if (i===0) left++
        if (i===nums.length-1) right--
        while (left < right) {
            let sum = nums[i]+nums[left]+nums[right]
            if (Math.abs(target-sum) < smallestDiff) {
                closestSum = sum
                smallestDiff = Math.abs(target-sum)
            }
            if (sum === target) return target
            else if (sum < target) {
                left = i === left+1 ? left+2 : left+1
            } else {
                right = i === right-1 ? right-2 : right-1
            }
        }
    }
    return closestSum
};