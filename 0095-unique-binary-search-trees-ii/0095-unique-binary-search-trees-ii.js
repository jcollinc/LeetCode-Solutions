/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) return [];
    function treeBuilder(start, end) {
        if (start > end) return [null];
        const allTrees = [];
        for (let i = start; i <= end; i++) {
            const leftTrees = treeBuilder(start, i - 1);
            const rightTrees = treeBuilder(i + 1, end);
            for (const l of leftTrees) {
                for (const r of rightTrees) {
                    const curr = new TreeNode(i);
                    curr.left = l;
                    curr.right = r;
                    allTrees.push(curr);
                }
            }
        }
        return allTrees;
    }
    return treeBuilder(1, n);
};

