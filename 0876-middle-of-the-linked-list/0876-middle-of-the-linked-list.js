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
var middleNode = function(head) {
    let curr = head
    let len = 0
    while(curr) {
        curr = curr.next
        len++
    }
    mid = (Math.floor(len / 2))
    while (mid) {
        head = head.next
        mid--
    }
    return head
};