/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0, r = height.length - 1, max = 0
    while (l < r) {
        max = Math.max(max, (r - l) * Math.min(height[l], height[r]))
        height[l] > height[r] ? r-- : l++
    }
    return max
};