/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    function checkIndex(idx) {
        let lower = nums[idx-1] ? nums[idx-1] : -Infinity
        let higher = nums[idx+1] ? nums[idx+1] : -Infinity
        let isPeak = nums[idx] > lower && nums[idx] > higher
        let isRising = nums[idx] < nums[idx+1]
        return [isPeak, isRising]
    }
    
    let l = 0, r = nums.length - 1
    while (l < r) {
        let mid = Math.floor((l+r)/2)
        let [isPeak, isRising] = checkIndex(mid)
        if (isPeak) return mid
        else {
            isRising ? l = mid + 1 : r = mid - 1
        }
    }
    return l
}