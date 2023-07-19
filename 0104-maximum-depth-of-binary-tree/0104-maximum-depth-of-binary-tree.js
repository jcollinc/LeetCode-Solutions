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
    let maxDepth = 0
    function dfs(node, depth = 1) {
        if (!node) return
        dfs(node.left, depth+1)
        dfs(node.right, depth+1)
        maxDepth = Math.max(depth, maxDepth)
    }  
    dfs(root)
    return maxDepth
};