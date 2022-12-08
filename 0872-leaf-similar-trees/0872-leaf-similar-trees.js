/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function traverse (node, arr) {
        if (!node) return arr
        if (!node.left && !node.right) {
            arr.push(node.val)
        }
        traverse(node.left, arr)
        traverse(node.right, arr)
        return arr
    }
    let arr1 = traverse(root1, [])
    let arr2 = traverse(root2, [])
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
};