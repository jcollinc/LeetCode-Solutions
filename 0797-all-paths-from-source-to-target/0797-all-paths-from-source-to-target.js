/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let visited = new Set()
    let n = graph.length
    let paths = []
    let queue = [[graph[0],[0]]]
    while (queue.length) {
        let [curr, path] = queue.shift()
        visited.add(curr)
        for (let node of curr) {
            if (node === n-1) paths.push([...path, node])
            else if (!visited.has(node)) {
                queue.push([graph[node], [...path, node]])
            }
        }
    }
    return paths
};