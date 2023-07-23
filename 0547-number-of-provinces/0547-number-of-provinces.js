/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const seen = new Set();
    let res = 0;
    const queue = [];
    let front = 0; 

    for (let i = 0; i < isConnected.length; i++) {
        if (!seen.has(i)) {
            queue.push(i);
            seen.add(i);
            while (front < queue.length) {
                const curr = queue[front];
                front++; 
                for (let j = 0; j < isConnected[0].length; j++) {
                    if (isConnected[curr][j] === 1 && !seen.has(j)) {
                        queue.push(j);
                        seen.add(j);
                    }
                }
            }
            res++;
        }
    }

    return res;
};