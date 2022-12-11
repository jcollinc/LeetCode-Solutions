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

/*
Standard tree traversal
If no tree, return 
If no left && right, return
Otherwise check the sume of current node + left && right nodes
Check that sum against maximum and update if need be
*/ 


var maxPathSum = function(root) {
    
    let max = -Infinity
    
    function checkPathSum (node) {

        if (!node) return 0

        let sumLeft = checkPathSum(node.left), 
            sumRight = checkPathSum(node.right),
            allSum = node.val + sumLeft + sumRight,
            leftNodeSum = node.val + sumLeft,
            rightNodeSum = node.val + sumRight;

        max = Math.max(max, node.val, allSum, leftNodeSum, rightNodeSum)
        return Math.max(node.val, leftNodeSum, rightNodeSum)
    }
    checkPathSum(root)
    return max
};

