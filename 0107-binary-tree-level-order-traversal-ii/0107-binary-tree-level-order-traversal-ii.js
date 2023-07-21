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
var levelOrderBottom = function(root) {
    let queue = [[root, 0]], output = []
    while(queue.length) {
        let [node, level] = queue.shift()
        if (!node) continue
        if (node.left) queue.push([node.left, level+1])
        if (node.right) queue.push([node.right, level+1])
        output[level] ? output[level].push(node.val) : output[level] = [node.val]
    }
    return output.reverse()
};