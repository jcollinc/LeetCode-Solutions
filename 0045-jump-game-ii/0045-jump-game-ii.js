/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length, jumps = 0, idx = 0
    while (idx < nums.length-1) {
        let max = 0, nextIdx = 0
        for (let i = idx+1; i <= idx + nums[idx]; i++) {
            if (i === nums.length-1) return jumps+1
            if (i + nums[i] > max) {
                max = i + nums[i]
                nextIdx = i
            }
        }
        idx = nextIdx
        jumps++
    }
    return jumps
};

