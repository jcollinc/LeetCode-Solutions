/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.list = head
    this.length = 0
    
    let temp = head
    while (temp) {
        temp = temp.next
        this.length++
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    let random = Math.floor(Math.random() * this.length), curr = this.list
    while (random > 0) {
        curr = curr.next
        random--
    }
    return curr.val
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */