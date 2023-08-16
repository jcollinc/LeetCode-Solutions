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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let subtreeStatus = false
    function traverseRoot(node) {
        if (!node) return
        if (node.val === subRoot.val) {
            if (isSame(node, subRoot)) subtreeStatus = true
        }
        traverseRoot(node.left)
        traverseRoot(node.right)
    }
    function isSame (p, q) {
        if (!p && !q) return true
        if (!p || !q || p.val !== q.val) return false
        return isSame(p.left, q.left) && isSame(p.right, q.right)
    }
    traverseRoot(root)
    return subtreeStatus
};