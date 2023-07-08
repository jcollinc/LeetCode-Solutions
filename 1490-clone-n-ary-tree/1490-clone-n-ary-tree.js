
  // Definition for a Node.
  function Node(val, children) {
     this.val = val || 0;
     this.children = children || [];
  };


/**
 * @param {Node|null} node
 * @return {Node|null}
 */
var cloneTree = function(root) {
    if (!root) return root
    let newNode = new Node(root.val)
    for (let child of root.children) newNode.children.push(cloneTree(child))
    return newNode
};