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
var averageOfSubtree = function(root) {
    let res = 0
    function traverse(node) {
        if (!node) return [0,0]
        let [leftSum, leftCount] = traverse(node.left)
        let [rightSum, rightCount] = traverse(node.right)
        let sum = node.val + leftSum + rightSum, count = leftCount + rightCount + 1
        if (Math.floor(sum / count) === node.val) res++
        return [sum, count]
    }
    traverse(root)
    return res
};