/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    let gate = 0, empty = 2147483647 
    let directions = [[0,1],[0,-1],[1,0],[-1,0]]
    let addressIsValid = (arr, r, c) => {
        return r >= 0 && c >= 0 && r < arr.length && c < arr[r].length
    }
    let m = rooms.length, n = rooms[0].length
    let queue = []
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (rooms[row][col] === gate) queue.push([row, col])      
        }
    }
    while (queue.length) {
        let [gateRow, gateCol] = queue.shift()
        for (let [dx, dy] of directions) {
            let r = gateRow + dx, c = gateCol + dy
            if (!addressIsValid(rooms, r, c) || rooms[r][c] !== empty) continue
            rooms[r][c] = rooms[gateRow][gateCol] + 1
            queue.push([r, c])
        }
    }
};