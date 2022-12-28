/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    let queue = new MaxPriorityQueue({priority: x => x});
    for (const e of piles) queue.enqueue(e);
    while(k--) {
        let cur = queue.dequeue().element;
        let remove = parseInt(cur / 2);
        queue.enqueue(cur - remove);
    }
    let res = 0;
    while(queue.size()) res += queue.dequeue().element; 
    return res;
};