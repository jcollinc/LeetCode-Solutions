/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let topKQueue = new MaxPriorityQueue, topK
    for (let num of nums) {
        topKQueue.enqueue(num)
    }
    for (let i=0; i<k; i++) {
        topK = topKQueue.dequeue().element
    }
    return topK
};