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
var countUnivalSubtrees = function(root) {
    let univalCount = 0
    function getCount(node) {
        if (!node) return true
        let left = getCount(node.left)
        let right = getCount(node.right)
        if (!left || !right) return false
        if (node.left && node.val !== node.left.val) return false
        if (node.right && node.val !== node.right.val) return false
        univalCount++
        return true
    }
    getCount(root)
    return univalCount
};