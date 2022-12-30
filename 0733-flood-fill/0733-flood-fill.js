/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor, toChange = image[sr][sc]) {
    if (sr < 0 || 
        sc < 0 || 
        sr >= image.length || 
        sc >= image[sr].length || 
        image[sr][sc] !== toChange || 
        image[sr][sc] === newColor) {
        return image
    }
    let directions = [[0,1],[0,-1],[1,0],[-1,0]]
    image[sr][sc] = newColor
    for (let [dy, dx] of directions) {
        floodFill(image, sr+dy, sc + dx, newColor, toChange)
    }
    return image
};