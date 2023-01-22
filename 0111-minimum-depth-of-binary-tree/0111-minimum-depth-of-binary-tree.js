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
var minDepth = function(root, min = 1) {
    if (!root && min === 1) return 0
    if (!root) return Infinity
    if (!root.left && !root.right) return min
    return Math.min(minDepth(root.left, min + 1), minDepth(root.right, min + 1))
};