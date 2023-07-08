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
var sumEvenGrandparent = function(root) {
    let sum = 0
    function traverse(node, gp = null, p = null) {
        if (!node) return
        if (gp && gp % 2 === 0) sum += node.val
        traverse(node.left, p, node.val)
        traverse(node.right, p, node.val)
    }
    traverse(root)
    return sum
};