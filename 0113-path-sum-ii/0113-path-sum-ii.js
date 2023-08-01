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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let validPaths = []
    function getPaths(node, path, sum) {
        if (!node) return
        sum += node.val
        path.push(node.val)
        if (!node.left && !node.right) {
            if (sum === targetSum) validPaths.push(path)
            return
        }
        getPaths(node.left, [...path], sum)
        getPaths(node.right, [...path], sum)
    }
    getPaths(root, [], 0)
    return validPaths
};