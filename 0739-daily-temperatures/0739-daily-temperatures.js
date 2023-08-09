/**
 * @param {number[]} temps
 * @return {number[]}
 */
var dailyTemperatures = function(temps) {
    let n = temps.length
    let minHeap = new MinPriorityQueue()
    let res = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        if (temps[i] < temps[i+1]) res[i] = 1
        else if (i < n-1) (minHeap.enqueue(i, temps[i]))
        while (minHeap.front() && minHeap.front().priority < temps[i]) {
            let idx = minHeap.dequeue().element
            res[idx] = i - idx  
        } 
    }
    return res
};