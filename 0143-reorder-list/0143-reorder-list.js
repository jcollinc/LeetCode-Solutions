/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let reverse = (list) => {
        let curr = list
        let prev = null
        while (curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        return prev
    }
    let curr = head
    while (curr) {
        curr.next = reverse(curr.next)
        curr = curr.next
    }
};



