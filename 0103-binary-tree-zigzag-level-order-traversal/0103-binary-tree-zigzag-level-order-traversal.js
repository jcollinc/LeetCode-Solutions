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
    let queue = [[root, true, 0]], traversal = []
    while (queue.length) {
        let curr = queue.pop(), [node, dir, level] = curr
        if (!traversal[level]) traversal[level] = []
        
        dir ? traversal[level].unshift(node.val) : traversal[level].push(node.val)

        if (node.left) queue.push([node.left, !dir, level+1])
        if (node.right) queue.push([node.right, !dir, level+1])
    }
    return traversal
};