/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let seen = new Set() 
    let current = head
    while (!seen.has(current) && current) {
        seen.add(current)
        current = current.next
    }
    return !!current
};