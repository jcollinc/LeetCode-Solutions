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
    let maxDepth = 0, sum = 0
    const dfs = (node, currDepth) => {
        if (!node) return
        if (currDepth > maxDepth) {
            sum = node.val
            maxDepth = Math.max(maxDepth, currDepth)
        } else if (currDepth === maxDepth) sum += node.val
        dfs(node.left, currDepth + 1)
        dfs(node.right, currDepth + 1) 
    }
    dfs(root, 0)
    return sum
};