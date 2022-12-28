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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let current = root
    if (!current) return root
    if (current.left || current.right) {
        let temp = current.left
        current.left = current.right
        current.right = temp
    }
    invertTree(current.right)
    invertTree(current.left)
    return root
};