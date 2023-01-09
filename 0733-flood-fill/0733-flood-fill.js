/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color, toChange = image[sr][sc]) {
    function outOfBounds() {
        return (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length)
    }
    if (outOfBounds() || toChange === color || image[sr][sc] !== toChange) return image
    let directions = [[0,1],[0,-1],[1,0],[-1,0]]
    image[sr][sc] = color
    for (let [dx,dy] of directions) {
        floodFill(image, sr+dx, sc+dy, color, toChange)
    }
    return image
};