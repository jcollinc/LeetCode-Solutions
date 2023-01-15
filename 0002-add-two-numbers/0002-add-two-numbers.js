/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

var addTwoNumbers = function(l1, l2) {
    let p1 = l1, p2 = l2, res = [], remainder = []
    while (p1 && p2) {  
        let sum = p1.val + p2.val 
        if (remainder.length) sum += remainder.pop()
        if (sum > 9) {
            remainder.push(parseInt(sum.toString()[0]))
            res.push(parseInt(sum.toString()[1]))
        } else {
            res.push(sum)
        }
        p1 = p1.next
        p2 = p2.next
    }
    if (p1) {
        while (p1) {
            let sum = p1.val
            if (remainder.length) sum += remainder.pop() 
             if (sum > 9) {
                    remainder.push(parseInt(sum.toString()[0]))
                    res.push(parseInt(sum.toString()[1]))
                } else {
                    res.push(sum)
                }
            p1 = p1.next
        }
    } else if (p2) {
        while (p2) {
            let sum = p2.val
            if (remainder.length) sum += remainder.pop() 
             if (sum > 9) {
                    remainder.push(parseInt(sum.toString()[0]))
                    res.push(parseInt(sum.toString()[1]))
                } else {
                    res.push(sum)
                }
            p2 = p2.next
        }
    }
    while (remainder.length) res.push(remainder.pop())
    if (res.length === 1) return new ListNode(res.pop())
    let l3 = new LinkedList(new ListNode(res)), head = l3
    for (let i = 0; i < res.length; i++) {
        l3.val = res[i]
        if (i < res.length - 1) l3.next = new ListNode()
        l3 = l3.next
    }
    return head
};