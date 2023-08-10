/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let pivot = 0, n = nums.length
    
    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[i-1]) {
            pivot = i
            break
        }
    }
    
    let l = 0, r = n-1
    while (l <= r) {
        let mid = Math.floor((l+r)/2)
        let candidate = nums[(mid+pivot) % n]
        if (candidate === target) return true
        candidate < target ? l = mid+1 : r = mid-1
    }
    
    return false
};