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
    pA = headA, pB = headB
    
    while (pA !== pB) {
        pA = !pA ? headB : pA.next
        pB = !pB ? headA : pB.next 
    }
    
    return pA
};