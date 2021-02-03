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
let widthOfBinaryTree = function(root) {
   let maxW = 1;
   let que = [root];
   let indexList = [1];
   let size = 1;
   while (que.length !== 0) {
       let node = que.shift()
       let index = indexList.shift()
       size--
       if (node.left != null) {
           que.push(node.left)
           indexList.push(2 * index)
       }

       if (node.right != null) {
           que.push(node.right)
           indexList.push(2 * index + 1)
       }

       if (size === 0) {
           if (indexList.length >= 2) {
               maxW = Math.max(maxW, indexList[indexList.length - 1] - indexList[0] + 1)
           }
           size = que.length
       }
   }

   return maxW;
};

console.log(widthOfBinaryTree(getTreeFromLayerOrderArray([1,3,2,5,3,null,9])))
