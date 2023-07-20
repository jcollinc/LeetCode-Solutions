/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    //create adjacency matrix
    let neighbors = new Map()
    for (let [start, end] of edges) {
        if (!neighbors.get(start)) neighbors.set(start, [])
        if (!neighbors.get(end)) neighbors.set(end, [])
        neighbors.get(start).push(end)
        neighbors.get(end).push(start) 
    }
    let queue = [source]
    let seen = new Set()
    while (queue.length) {
        let node = queue.pop()
        if (node === destination) return true
        seen.add(node)
        for (let neighbor of neighbors.get(node)) {
            if (!seen.has(neighbor)) queue.push(neighbor)
        }
    }
    return false
};