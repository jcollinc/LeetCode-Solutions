/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
// Count the ones, in order to find minimum window length necessart to hold them all
    let oneCount = 0
    for (let num of nums) {
        if (num === 1) oneCount++
    }
// Calculate number of zeroes in initial window of size oneCount
    let zeroCount = 0
    for (let i = 0; i < oneCount; i++) {
        if (nums[i] === 0) zeroCount++
    }
// Iterate through nums by sliding the window until 'start' reaches the last value
// Track minimum number of zeroes in each window
    let end = oneCount-1, minZero = zeroCount
    for (let start = 0; start < nums.length; start++) {
        if (nums[start] === 0) zeroCount--
        end = (end + 1) % nums.length
        if (nums[end] === 0) zeroCount++
        minZero = Math.min(minZero, zeroCount)
    }
    return minZero
};