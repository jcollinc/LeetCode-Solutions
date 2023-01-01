/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let curr = head, prev = null, tracker = 0, reverseCount = right - left
    if (reverseCount === 0) return head
    var reverseList = function(node, reverseCount) {
        let curr = node, prev = null
        while (curr && reverseCount) {
            let toReverse = curr.next
            curr.next = prev
            prev = curr
            curr = toReverse
            reverseCount--
        }
        node.next = curr
        return prev
    };
    
    while (curr) {
        if (tracker === left - 1) {
            let reversed = reverseList(curr, right - left + 1)
            if (left === 1) return reversed
            prev.next = reversed
            return head
        }
        else prev = curr, curr = curr.next
        tracker++
    }
    return head
};