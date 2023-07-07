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
var deepestLeavesSum = function(root) {
    let sum = new Map(), maxDepth = 0
    function dfs(node, currDepth) {
        if (!node) return
        sum.set(currDepth, node.val + (sum.get(currDepth) || 0))
        maxDepth = Math.max(maxDepth, currDepth)
        dfs(node.left, currDepth + 1)
        dfs(node.right, currDepth + 1) 
    }
    dfs(root, 0)
    return sum.get(maxDepth)
};