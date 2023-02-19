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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return []
    let queue = [[root, true, 0]], traverse = []
    while (queue.length) {
        let curr = queue.pop(), node = curr[0], dir = curr[1], level = curr[2]
        if (!node) continue
        if (dir) {
            traverse[level] ? traverse[level].unshift(node.val) : traverse[level] = [node.val]
        } else {
           traverse[level] ? traverse[level].push(node.val) : traverse[level] = [node.val] 
        }
        if (node.left) queue.push([node.left, !dir, level+1])
        if (node.right) queue.push([node.right, !dir, level+1])
    }
    return traverse
};