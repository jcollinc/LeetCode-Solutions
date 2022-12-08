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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let res = 0
    let node = root
    if (!node) return res
    if (node.val <= high && node.val >= low) {
        res += node.val
    }
    if (node.val >= low) {
        res += rangeSumBST(node.left, low, high)
    }
    if (node.val <= high) {
        res += rangeSumBST(node.right, low, high)
    }
    return res
};