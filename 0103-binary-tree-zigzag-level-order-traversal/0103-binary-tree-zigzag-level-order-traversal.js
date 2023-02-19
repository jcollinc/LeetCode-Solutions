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
        let curr = queue.pop(), [node, dir, level] = curr
        
        if (!node) continue
        if (!traverse[level]) traverse[level] = []
        
        dir ? traverse[level].unshift(node.val) : traverse[level].push(node.val)

        if (node.left) queue.push([node.left, !dir, level+1])
        if (node.right) queue.push([node.right, !dir, level+1])
    }
    return traverse
};