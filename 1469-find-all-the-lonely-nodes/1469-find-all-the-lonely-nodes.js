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
var getLonelyNodes = function(root) {
    let output = []
    function traverse(node) {
        if (!node) return
        if (node.left && !node.right) output.push(node.left.val)
        if (node.right && !node.left) output.push(node.right.val)
        traverse(node.left)
        traverse(node.right)
    }
    traverse(root)
    return output
};