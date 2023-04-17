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
  function reverseBetween(head, m, n) {
    if (!head || m === n) return head;
    let p = new ListNode(null);
    let dummy = p;
    dummy.next = head;
    for (let i = 0; i < m - 1; i++) p = p.next;
    let tail = p.next;

    for (let i = 0; i < n - m; i++) {
      let tmp = p.next;
      p.next = tail.next;
      tail.next = tail.next.next;
      p.next.next = tmp;
    }
    return dummy.next;
  }