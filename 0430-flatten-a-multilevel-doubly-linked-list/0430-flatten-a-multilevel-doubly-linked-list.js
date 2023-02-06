/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (!head) return head
    let curr = head
    let stack = []
    while (curr) {
        if (curr.child) {
            if (curr.next) {
                stack.push(curr.next)
                curr.next.prev = null 
            }
            curr.next = curr.child
            curr.child.prev = curr
            curr.child = null
        } else if (stack.length && !curr.next) {
            curr.next = stack.pop()
            curr.next.prev = curr
        }
        curr = curr.next
    }
    return head
};