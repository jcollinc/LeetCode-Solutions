/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    
    horizontalCuts.sort((a, b) => a - b)
    verticalCuts.sort((a, b) => a - b)
    
    let maxH = Math.max(horizontalCuts[0], (h - horizontalCuts[horizontalCuts.length - 1])) 
    let maxW = Math.max(verticalCuts[0], (w - verticalCuts[verticalCuts.length - 1]))
    
    for (i = 1; i < horizontalCuts.length; i++) {
        if (horizontalCuts[i] - horizontalCuts[i-1] > maxH) maxH = horizontalCuts[i] - horizontalCuts[i-1]
    }
    
    for (i = 1; i < verticalCuts.length; i++) {
        if (verticalCuts[i] - verticalCuts[i-1] > maxW) maxW = verticalCuts[i] - verticalCuts[i-1]
    }
    
    return (BigInt(maxH) * BigInt(maxW)) % 1000000007n
};