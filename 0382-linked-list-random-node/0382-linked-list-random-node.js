/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.list = head
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let curr = this.list, res = null, i = 1
    while (curr) {
        if (Math.random() < 1/i) {
            res = curr.val
        }
        curr = curr.next
        i++
    }
    return res
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */