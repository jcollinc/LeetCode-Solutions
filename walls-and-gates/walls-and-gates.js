/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

let empty = 2147483647, gate = 0;
let directions = [ [0, 1], [0, -1], [-1, 0], [1, 0] ]; 

let inbound = (arr, i, j) => {
    return i >= 0 && j >= 0 && i < arr.length && j < arr[0].length;
}
    
var wallsAndGates = function(rooms) {
    if (!rooms || rooms.length === 0) return
    let m = rooms.length, n = rooms[0].length
    let queue = []
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (rooms[row][col] === gate) queue.push([row, col])     
        }
    }
    while (queue.length) {
        let [gateRow, gateCol] = queue.shift()
        for (let [x, y] of directions) {
            let row = gateRow + x, col = gateCol + y;
            if(!inbound(rooms, row, col) || rooms[row][col] != empty) continue;
            rooms[row][col] = rooms[gateRow][gateCol] + 1;
            queue.push([row, col])
        }
    }
};