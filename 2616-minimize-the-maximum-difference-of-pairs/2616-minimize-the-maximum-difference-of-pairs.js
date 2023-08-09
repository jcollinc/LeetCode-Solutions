/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    nums.sort((a,b) => a-b)
    let n = nums.length
    let l = 0, r = nums[n-1] - nums[0]
    while (l < r) {
        let mid = Math.floor((l+r) / 2), pairs = 0
        for (let i = 1; i < n && pairs < p; i++) {
            if (nums[i] - nums[i-1] <= mid) {
                pairs++
                i++
            }
        }
        if (pairs >= p) r = mid
        else l = mid + 1
    }
    return l
}; 

    