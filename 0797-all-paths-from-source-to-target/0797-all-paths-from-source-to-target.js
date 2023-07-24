/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let n = graph.length
    let paths = []
    function dfs(node, neighbors, path) {
        path.push(node)
        if (node === n-1) {
            paths.push([...path])
            return
        }
        for (let neighbor of neighbors) {
            dfs(neighbor, graph[neighbor], path)
            path.pop()
        }
    }
    dfs(0, graph[0], [])
    return paths
};