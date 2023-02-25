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
    let lenA = 0, lenB = 0, nodeA = headA, nodeB = headB
    
    while (nodeA) {
        lenA++
        nodeA = nodeA.next
    }
    while (nodeB) {
        lenB++
        nodeB = nodeB.next
    }
    
    nodeA = headA
    nodeB = headB
    
    if (lenA > lenB) {    
        while (lenA - lenB > 0) {
            nodeA = nodeA.next
            lenA--
        }
    } else if (lenA < lenB) {
        while (lenB - lenA > 0) {
            nodeB = nodeB.next
            lenB--
        }   
    }
    
    while (nodeA && nodeB) {
        if (nodeA === nodeB) return nodeA
        nodeA = nodeA.next
        nodeB = nodeB.next
    }
    
    return null
};