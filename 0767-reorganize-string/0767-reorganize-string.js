/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let charCount = new Map();
    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    let maxPriorityQueue = new MaxPriorityQueue(), 
          result = []
    
    for (let [char, count] of charCount) {
        maxPriorityQueue.enqueue({ char, count }, count);
    }
    
    while (!maxPriorityQueue.isEmpty()) {
        let curr = maxPriorityQueue.dequeue().element;
        if (result.length === 0 || curr.char !== result[result.length - 1]) {
            result.push(curr.char);
            if (--curr.count > 0) {
                maxPriorityQueue.enqueue(curr, curr.count);
            }
        } else {
            let next = maxPriorityQueue.dequeue();
            if (next) next = next.element
            else return ""
            result.push(next.char);
            if (--next.count > 0) {
                maxPriorityQueue.enqueue(next, next.count);
            }
            maxPriorityQueue.enqueue(curr, curr.count);
        }
    }
    return result.join("");
};


