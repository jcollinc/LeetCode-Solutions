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
var levelOrder = function(root) {
    let output = []
    let queue = [[root,0]]
    while (queue.length) {
        let [node, level] = queue.shift()
        if (!node) continue
        output[level] ? output[level].push(node.val) : output[level] = [node.val]
        queue.push([node.left, level+1], [node.right, level+1])
    }
    return output
};