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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let min = -Infinity, max = Infinity
    function validate(node, minimum, maximum) {
        if (!node) return true
        if (node.val <= minimum || node.val >= maximum) return false
        return validate(node.left, minimum, node.val) && validate(node.right, node.val, maximum)
    }
    return validate(root, min, max)
};