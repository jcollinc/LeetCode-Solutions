/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color, toChange = image[sr][sc]) {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[sr].length || image[sr][sc] !== toChange || image[sr][sc] === color) return image
    let directions = [[0,1],[0,-1],[1,0],[-1,0]]
    image[sr][sc] = color
    for (let [dy,dx] of directions) {
        floodFill(image, sr+dy, sc+dx, color, toChange)
    }
    return image
};