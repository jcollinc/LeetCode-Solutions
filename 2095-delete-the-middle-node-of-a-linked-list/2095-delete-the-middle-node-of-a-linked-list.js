/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let left = head, slow = head, right = head, fast = head
    while (fast && fast.next) {
        left = slow
        slow = slow.next
        right = slow.next
        fast = fast.next.next
    }
    if (left === right) return null
    left.next = right
    return head
};