/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} group
 * @param {number[][]} beforeItems
 * @return {number[]}
 */
var sortItems = function(n, m, group, beforeItems) {
    const dependencyGraph = Array.from({ length: m + n }, () => []);
    const dependencyCount = Array(n + m).fill(0);

    for (let i = 0; i < group.length; i++) {
        if (group[i] == -1) continue;
        dependencyGraph[n + group[i]].push(i);
        dependencyCount[i]++;
    }

    for (let i = 0; i < beforeItems.length; i++) {
        for (const depItem of beforeItems[i]) {
            const a = group[depItem] === -1 ? depItem : n + group[depItem];
            const b = group[i] === -1 ? i : n + group[i];
            if (a === b) {
                dependencyGraph[depItem].push(i);
                dependencyCount[i]++;
            } else {
                dependencyGraph[a].push(b);
                dependencyCount[b]++;
            }
        }
    }
    
    const result = [];
    for (let i = 0; i < n + m; i++) {
        if (dependencyCount[i] === 0) dfs(result, dependencyGraph, dependencyCount, n, i);
    }
    return result.length === n ? result : [];

    function dfs(ans, graph, count, numItems, cur) {
        if (cur < numItems) ans.push(cur);
        count[cur] = -1;
        
        for (let next of graph[cur] || []) {
            count[next]--;
            if (count[next] === 0) dfs(ans, graph, count, numItems, next);
        }
    }
};
