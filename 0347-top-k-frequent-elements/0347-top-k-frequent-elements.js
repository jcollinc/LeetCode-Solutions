/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let max = 0
    let output = []
    let frequencyMap = new Map()
    let reverseMap = new Map()
    let seen = new Set()
    
    for (let num of nums) {
        frequencyMap.set(num, 1 + (frequencyMap.get(num) || 0))
        max = Math.max(max, frequencyMap.get(num))
    }
    
    for (let [num, frequency] of frequencyMap) {
        if (!reverseMap.has(frequency)) reverseMap.set(frequency, new Set([num]))
        else reverseMap.set(frequency, reverseMap.get(frequency).add(num))
    }
    
    let maxHeap = new MaxPriorityQueue()
    
    for (let [num, frequency] of frequencyMap) {
        if (!seen.has(frequency)) maxHeap.enqueue(frequency)
        seen.add(frequency)
    }
    
    while (k > 0) {
        let idx = maxHeap.dequeue().element
        for (let num of reverseMap.get(idx)) {
            if (k > 0) output.push(num)
            k--
        }
    }
    
    return output
};