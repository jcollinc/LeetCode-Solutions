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
    let isValid = true
    function validate(node, min = -Infinity, max = Infinity) {
        if (!node) return
        if (node.val <= min || node.val >= max) isValid = false
        validate(node.left, min, node.val)
        validate(node.right, node.val, max)
    }
    validate(root)
    return isValid
};