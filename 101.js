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

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function(root) {
    function isMirror(leftNode, rightNode) {
        if (rightNode == null && leftNode == null) return true;
        // 不平衡
        if (rightNode == null || leftNode == null) return false;
        return (leftNode.val === rightNode.val) && isMirror(leftNode.left, rightNode.right) && isMirror(leftNode.right, rightNode.left)
    }
    if (!root) {
        return true
    }
    return isMirror(root.left, root.right)
}


// let isSymmetric = function(root) {
//     // let res = [];
//     let isSymmetry = true;
//     let que = [root];
//     // 记录层数
//     let step = 0;
//     // 记录对称记录
//     let tree = {};
//     while (que.length && isSymmetry) {
//         let len = que.length;
//         let saveTreeArr = []
//         if (!root) {
//             return true;
//         }
//         if (root.right == null && root.left == null) {
//             return true;
//         } else if ((root.right == null && root.left) || (root.right && root.left == null)) {
//             return false;
//         }
//         for (let i = 0; i < len; i++) {
//             let cur = que.shift();
//             if (cur) {
//                 // res.push(cur.val);
//                 que.push(cur.left, cur.right);
//                 if (len > 1) {
//                     if (i <= (len / 2 - 1)) {
//                         saveTreeArr.push(cur.val)
//                     } else {
//                         saveTreeArr.unshift(cur.val)
//                     }
//                     if (i === len / 2 - 1) {
//                         tree[saveTreeArr.toString()] = true;
//                         saveTreeArr = []
//                     } else if (i === len - 1) {
//                         // 最后一个
//                         if (!tree[saveTreeArr.toString()])  {
//                             isSymmetry = false;
//                         }
//                         // saveTreeArr = []
//                     } else {
//                         console.log('即那里了')
//                     }
//                 }
//             } else {
//                 saveTreeArr.push(null)
//             }
//             // else {
//             //     if (que && que[0]) {
//             //         return false;
//             //     }
//             // }
//         }
//         step += 1;
//     }
//     // while (res.length > 1 && res[res.length - 1] == null) res.pop(); // 删掉结尾的 null
//     return isSymmetry;
// };

// [1,2,2,3,4,4,3]
// [1, 2]
// [1,2,2,null,3,null,3]
// [1,2,2,null,3,3]
let root = getTreeFromLayerOrderArray([1,2,2,null,3,null,3])
console.log(isSymmetric(root))
