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
        let curr = queue.shift()
        if (!curr[0]) continue
        queue.push([curr[0].left, curr[1]+1], [curr[0].right, curr[1]+1])
        output[curr[1]] ? output[curr[1]].push(curr[0].val) : output[curr[1]] = [curr[0].val]
    }
    return output.reverse()
};