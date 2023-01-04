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
    if (!root) return 0
    let maxDepth = 0
    dfs(root, 0)
    function dfs (node, depth) {
        if (!node) return 0
        let max = Math.max(dfs(node.left, depth+1), dfs(node.right, depth+1))
        maxDepth = Math.max(maxDepth, max)
        return max + 1
    }
    return maxDepth + 1
};