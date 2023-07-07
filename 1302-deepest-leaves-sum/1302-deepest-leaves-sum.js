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
    let maxDepthSum = [0,0]
    function dfs(node, currDepth) {
        if (!node) return
        if (currDepth > maxDepthSum[0]) maxDepthSum = [currDepth, node.val]
        else if (currDepth === maxDepthSum[0]) maxDepthSum[1] += node.val
        dfs(node.left, currDepth + 1)
        dfs(node.right, currDepth + 1) 
    }
    dfs(root, 0)
    return maxDepthSum[1]
};