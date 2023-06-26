/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let oneCount = 0, zeroCount = 0
    let n = nums.length
    for (let num of nums) {
        if (num === 1) oneCount++
    }
    for (let i = 0; i < oneCount; i++) {
        if (nums[i] === 0) zeroCount++
    }
    let start = 0, end = oneCount - 1, minZeros = zeroCount
    
    while (start < n) {
        if (nums[start] === 0) zeroCount--
        start++
        end = (end + 1) % n
        if (nums[end] === 0) zeroCount++
        minZeros = Math.min(minZeros, zeroCount)
    }
    return minZeros
};