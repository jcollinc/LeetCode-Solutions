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
var isBalanced = function(root) {
    if (root == null)  return true;
	if (Height(root) == -1)  return false;
	return true;
}

var Height = function(root) {
	if (root == null)  return 0;
	let leftHeight = Height(root.left);
	let rightHight = Height(root.right);
	if (leftHeight == -1 || rightHight == -1)  return -1;
    if (Math.abs(leftHeight - rightHight) > 1)  return -1;
	return Math.max(leftHeight, rightHight) + 1;
};