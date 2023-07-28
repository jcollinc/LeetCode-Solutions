/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let smallestDiff = Infinity, closestSum = 0
    nums.sort((a,b)=>a-b)
    for (let i = 0; i < nums.length && smallestDiff !== 0; i++) {
        let left = i+1, right = nums.length-1
        while (left < right) {
            let sum = nums[i]+nums[left]+nums[right]
            if (Math.abs(target-sum) < smallestDiff) {
                closestSum = sum
                smallestDiff = Math.abs(target-sum)
            }
            if (sum < target) left++
            else right--
        }
    }
    return closestSum
};