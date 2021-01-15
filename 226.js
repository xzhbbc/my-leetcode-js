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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;
    // 递归
    //   const left = root.left;
    //   const right = root.right;
    //   root.right = invertTree(left);
    //   root.left = invertTree(right);
    // 我们用stack来模拟递归
    // 本质上递归是利用了执行栈，执行栈也是一种栈
    // 其实这里使用队列也是一样的，因为这里顺序不重要

    const stack = [root];
    let current = null;
    while ((current = stack.shift())) {
        const left = current.left;
        const right = current.right;
        current.right = left;
        current.left = right;
        if (left) {
            stack.push(left);
        }
        if (right) {
            stack.push(right);
        }
    }
    return root;
};

let root = getTreeFromLayerOrderArray([4, 2, 7, 1, 3, 6, 9])
