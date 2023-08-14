/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) { 
	let minHeap = new MinPriorityQueue(k);
	for (let num of nums) {
		if (minHeap.size() < k) {
			minHeap.enqueue(num);
		} else {
			if (minHeap.front().element < num) {
				minHeap.dequeue();
				minHeap.enqueue(num);
			}
		}
	}
	return minHeap.dequeue().element;
};