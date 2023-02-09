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
    let slow = head, fast = head, len = 0
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
        len++
    }
    let curr = slow.next, prev = null 
    while (curr) {
        let toReverse = curr.next
        curr.next = prev
        prev = curr
        curr = toReverse
    }
    slow.next = prev
    slow = head, fast = head
    for (let i = 0; i <= len; i++) {
        fast = fast.next
    }
    while (fast) {
        if (slow.val !== fast.val) return false
        slow = slow.next
        fast = fast.next
    }
    return true
};