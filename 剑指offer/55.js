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
    while(index < n) {
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


const maxDepth = function(root) {
    function dfs(node, d) {
        if (!node) return d;
        let l_d = dfs(node.left, d + 1)
        let r_d = dfs(node.right, d + 1)
        if (l_d >= r_d) return l_d;
        return r_d;
    }
    return dfs(root, 0);
};

let root = getTreeFromLayerOrderArray([3,9,20,null,null,15,7])


console.log(maxDepth(root))
