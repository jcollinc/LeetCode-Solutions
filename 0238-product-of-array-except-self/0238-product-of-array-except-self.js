/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftProducts = [], rightProducts = [], left = 1, right = 1
    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        leftProducts[i] = (left *= nums[i] )
        rightProducts[j] = (right *= nums[j])
    }
    let output = []
    for (let i = 0; i < nums.length; i++) {
        output[i] = (leftProducts[i-1] === undefined ? 1 : leftProducts[i-1]) * (rightProducts[i+1] === undefined ? 1 : rightProducts[i+1])
    }
    return output
    
};