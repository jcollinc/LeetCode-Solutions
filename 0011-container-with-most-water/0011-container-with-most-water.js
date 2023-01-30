/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1, max = 0
    while (left < right) {
        let heightL = height[left], heightR = height[right]
        let current = (right - left) * Math.min(heightL, heightR)
        max = Math.max(max, current)
        heightL > heightR ? right-- : left++
    }
    return max
};