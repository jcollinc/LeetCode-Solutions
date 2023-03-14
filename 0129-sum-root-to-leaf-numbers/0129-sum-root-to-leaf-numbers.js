/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum = 0
    getNums(root, "")
    
    function getNums(node, num) {
        if (!node) return
        if (!hasChildren(node)) {
            num += node.val.toString()
            sum += parseInt(num)
            return
        }
        num += node.val.toString()
        getNums(node.left, num)
        getNums(node.right, num)
    }
    
    return sum
};
    
function hasChildren(node) {
    return node.left || node.right
}