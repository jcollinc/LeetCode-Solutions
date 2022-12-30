/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) return root
    let leftSearch = lowestCommonAncestor(root.left, p, q)
    let rightSearch = lowestCommonAncestor(root.right, p, q)   
    return leftSearch && rightSearch ? root : (leftSearch || rightSearch) 
};