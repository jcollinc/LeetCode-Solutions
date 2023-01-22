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
var minDepth = function(root) {
    if (!root) return 0
    let queue = [[root, 1]];
    while (queue.length) {
        let data = queue.shift();
        node = data[0]
        let level = data[1]
        if (!node) continue
        if (node.left || node.right) {
            level++
        } else if (!node.left && !node.right) {
            return level
        }
        if (node.left) {
            queue.push([node.left, level]);
        }
        if (node.right) {
            queue.push([node.right, level]);
        }
    } 
};