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
    let current = head
    let listArray = []
    while (current) {
        listArray.push(current.val)
        current = current.next
    }
    let left = 0, right = listArray.length - 1
    while (left < right) {
        if (listArray[left] !== listArray[right]) return false
        left++, right--
    }
    return true
};