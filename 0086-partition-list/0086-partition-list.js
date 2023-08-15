/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let list1Head = new ListNode(0, null), list2Head = new ListNode(0, null)
    let p1 = list1Head, p2 = list2Head
    let curr = head
    while (curr) {
        if (curr.val < x) {
            p1.next = new ListNode(curr.val, null)
            p1 = p1.next
        } else {
            p2.next = new ListNode(curr.val, null)
            p2 = p2.next
        }
        curr = curr.next
    }
    p1.next = list2Head.next
    return list1Head.next
};