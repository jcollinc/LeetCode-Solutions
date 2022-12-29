/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor, firstColor = image[sr][sc]) => {
    let directions = [[0,1],[0,-1],[1,0],[-1,0]]
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== firstColor || image[sr][sc] === newColor)   {
        return image; 
    }
    image[sr][sc] = newColor;
    for (let [dx,dy] of directions) {
        floodFill(image, sr + dx, sc + dy, newColor, firstColor);
    }
	// return modified image
    return image;
};