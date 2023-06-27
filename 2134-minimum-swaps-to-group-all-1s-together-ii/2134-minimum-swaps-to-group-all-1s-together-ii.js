/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
// Count the ones, in order to find minimum window length necessary to hold them all
// Return zero early if the array has only ones, or only one zero
    
    let oneCount = 0
    for (let num of nums) {
        if (num === 1) oneCount++
    }
    if (oneCount >= nums.length - 1) return 0
    
// Calculate number of zeroes in initial window of size oneCount
// Return zero early if the initial window contains all the ones
    
    let zeroCount = 0
    for (let i = 0; i < oneCount; i++) {
        if (nums[i] === 0) zeroCount++
    }
    if (zeroCount === 0) return 0
    
// Iterate through nums by sliding the window [start...end] until 'start' reaches the last item in 'nums'. Calculate next 'end' value with modulus so it loops to start of circular array when necessary
// Track minimum number of zeroes in each window by monitoring which values enter and exit the window with each window movement. Upate minZero accordingly. 
// Return zero early if we find a window which contains all the ones
    
    let end = oneCount-1, minZero = zeroCount
    for (let start = 0; start < nums.length; start++) {
        if (nums[start] === 0) zeroCount--
        end = (end + 1) % nums.length
        if (nums[end] === 0) zeroCount++
        if (zeroCount === 0) return 0
        minZero = Math.min(minZero, zeroCount)
    }
    return minZero
};