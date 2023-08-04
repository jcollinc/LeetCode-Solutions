/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    let output = []
    for (let i = 0; i + k - 1 < nums.length; i++) {
        let temp = i, left = i, right = i + k - 1, max = -Infinity
        while (temp <= right) {
            max = Math.max(max, nums[temp])
            temp++
        }
        output.push(max)
        if (nums[i] !== max && right !== nums.length - 1) {
            output.push(Math.max(max, (nums[right+1] || -Infinity)))
            i++
        }
    }
    return output
};