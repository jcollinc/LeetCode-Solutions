/**
 * // Definition for a _Node.
 * function _Node(val,prev,next) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 * };
 */

/**
 * @param {_Node} head
 * @return {number[]}
 */
var toArray = function(head) {
    let res = [], curr = head
    while (curr) {
        res.push(curr.val)
        curr = curr.next
    }
    return res
};