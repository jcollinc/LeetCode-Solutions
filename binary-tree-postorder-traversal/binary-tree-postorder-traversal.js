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
var postorderTraversal = function(root) {
    let output = []
    function dfs(node) {
        if (!node) return
        dfs(node.left)
        dfs(node.right)
        output.push(node.val)
    }
    dfs(root)
    return output
};