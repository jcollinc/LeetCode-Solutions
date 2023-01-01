/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head.next) return true
    
    let listLength = 0
    let seenVals = []
    
    let current = head
    while (current) {
        current = current.next
        listLength++
    }
    
    current = head
    let mid = Math.floor(listLength / 2)
    let isEven = listLength % 2 === 0
    while (current) {
        if (listLength > mid && isEven || listLength - 1 > mid && !isEven) {
            seenVals.push(current.val)
            listLength--
        } else if (listLength <= mid) {
            if (seenVals.pop() !== current.val) return false  
        } else listLength--
        current = current.next
    }
    return true
};