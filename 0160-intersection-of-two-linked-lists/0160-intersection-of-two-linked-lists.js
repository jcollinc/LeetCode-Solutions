/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let aSet = new Set()
    while (headA) {
        aSet.add(headA)
        headA = headA.next
    }
    while (headB) {
        if (aSet.has(headB)) return headB
        headB = headB.next
    }
    return null
};