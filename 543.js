function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}


function getTreeFromLayerOrderArray(array) {
    let n = array.length;
    if (!n) return null;
    let index = 0;
    let root = new TreeNode(array[index++]);
    let queue = [root];
    while (index < n) {
        let top = queue.shift();
        let v = array[index++];
        top.left = v == null ? null : new TreeNode(v);
        if (index < n) {
            let v = array[index++];
            top.right = v == null ? null : new TreeNode(v);
        }
        if (top.left) queue.push(top.left);
        if (top.right) queue.push(top.right);
    }
    return root;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
let diameterOfBinaryTree = function(root) {
    let max = 0;
    if (!root) {
        return max;
    }
    function dfs(node) {
        if (!node) return -1
        if ((!node.left && !node.right)) {
            return 0
        }
        let l_d = dfs(node.left) + 1
        let r_d = dfs(node.right) + 1
        max = Math.max(max, l_d + r_d)
        return Math.max(l_d, r_d);
    }
    dfs(root)
    return max
};

const root = getTreeFromLayerOrderArray([1, 2, 3, 4, 5])

console.log(diameterOfBinaryTree(root));

