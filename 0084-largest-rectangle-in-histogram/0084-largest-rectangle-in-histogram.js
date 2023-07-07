/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let maxArea = 0, minHeight = 0
    for (let i = 0; i < heights.length; i++) {
        if (minHeight === heights[i]) continue
        let temp = i, width = 0
        while (heights[temp] <= heights[i] && i < heights.length) {
            width++
            i++
        }
        i = temp - 1
        while (heights[temp] <= heights[i] && i >= 0) {
            width++
            i--
        }
        minHeight = heights[temp]
        maxArea = Math.max(maxArea, width * heights[temp], heights[temp])
        i = temp
    }
    return maxArea
};