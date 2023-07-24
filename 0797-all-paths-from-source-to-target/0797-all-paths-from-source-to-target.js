/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let n = graph.length
    let paths = []
    function dfs(node, neighbors, path, visited = new Set()) {
        path.push(node)
        visited.add(node)
        if (node === n-1) {
            paths.push([...path])
            return
        }
        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                dfs(neighbor, graph[neighbor], path, new Set(visited))
                path.pop()                
            }
        }
    }
    dfs(0, graph[0], [])
    return paths
};