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
var maxDepth = function(root) {
    function getMax(node) {
        return node ? Math.max(1 + getMax(node.left), 1 + getMax(node.right)) : 0
    }
    return Math.max(getMax(root))
};