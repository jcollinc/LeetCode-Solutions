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
 * @return {number[]}
 */
var postorderTraversal = function(root, output = []) {
    if (!root) return []
    if (!root.left && !root.right) {
        output.push(root.val)
        return output
    }
    postorderTraversal(root.left, output)
    postorderTraversal(root.right, output)
    output.push(root.val)
    return output
};