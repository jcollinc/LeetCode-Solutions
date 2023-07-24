/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let n = graph.length
    let paths = []
    function dfs(node, neighbors, path, visited = new Set()) {
        if (node === n-1) {
            paths.push([...path])
            return
        }
        visited.add(node)
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, graph[neighbor], [...path, neighbor], new Set(visited))
            }
        }
    }
    dfs(0, graph[0], [0])
    return paths
};