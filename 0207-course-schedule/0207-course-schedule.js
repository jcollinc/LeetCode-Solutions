/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const prereqMap = new Map();
    const visited = new Set();
    
	// build the adacency list
    for(let [course, prereq] of prerequisites){
        if(!prereqMap.has(course)){
            prereqMap.set(course, new Set([prereq]))
        } else {
            prereqMap.set(course, prereqMap.get(course).add(prereq))
        }
    }

    const dfs = (node) => {
        if(visited.has(node)){
            return false;
        }
        if(prereqMap.has(node)){
            if (prereqMap.get(node).size === 0){
                return true;
            }
            visited.add(node)
            for(let val of prereqMap.get(node)){
                if(!dfs(val)){
                    return false
                }
            }
            visited.delete(node);
            prereqMap.set(node, new Set())
        }
        return true;

    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false
    }
    
    return true
};