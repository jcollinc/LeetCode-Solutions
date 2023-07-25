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
    function convert(node) {
        if (!node) return 
        convert(node.right)
        node.val += sum
        sum = node.val
        convert(node.left)
    }
    convert(root)
    return root
};
