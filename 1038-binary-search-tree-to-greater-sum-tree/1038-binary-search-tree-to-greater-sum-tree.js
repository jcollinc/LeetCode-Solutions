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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let sum = 0
    function convertBST(node) {
        if (!node) return
        convertBST(node.right)
        node.val += sum
        sum = node.val
        convertBST(node.left)
        return node
    }
    return convertBST(root)
};