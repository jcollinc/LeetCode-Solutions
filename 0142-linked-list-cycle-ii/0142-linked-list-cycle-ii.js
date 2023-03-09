/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) return null
    let slow = head, fast = head
    while (fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (!fast || !fast.next) return null
        if (slow === fast) break
    }
    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};