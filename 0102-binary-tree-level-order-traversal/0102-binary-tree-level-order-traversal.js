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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let output = []
    function traverse (node, level = 0) {
        if (!node) return
        if (output[level]) {
            output[level].push(node.val)
        } else {
            output[level] = [node.val]
        }
        traverse(node.left, level+1)
        traverse(node.right, level+1)
    }
    traverse(root)
    return output
};