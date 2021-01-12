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

// const pathSum = function(root, sum) {
//     let mixList = []
//     let addValue = 0;
//     function dfs(node, list, last) {
//         // console.log(node.val)
//         if (!node) {
//             return [false]
//         }
//         addValue += node.val;
//         list.push(node.val);
//         if (addValue === sum) {
//             return [true, list]
//         }
//         if (node.val > sum || addValue > sum) {
//             // 当前节点或者和值大于寻找的sum
//             if (last && last.right) {
//                 let popData = list.pop();
//                 addValue -= popData;
//                 return [false];
//             } else {
//                 return [false];
//             }
//         }
//         let left_list = dfs(node.left, list, node)
//         if (left_list[0]) {
//             mixList.push(left_list[1])
//             addValue = 0;
//             list = [];
//         }
//         if (!node.right) {
//             addValue = 0;
//             list = [];
//             return [false];
//         }
//         let right_list = dfs(node.right, list, node)
//         if (right_list[0]) {
//             mixList.push(right_list[1])
//             addValue = 0;
//         }
//         return [false];
//     }
//     dfs(root, [], 0)
//     return mixList;
// };


// const pathSum = (root, sum) => {
//     if (!root) return []
//     let addVal = root.val;
//     let addList = [root.val];
//     let saveList = [];
//     function dfs(node, lastCur) {
//         if (!node) {
//             return
//         }
//         if (lastCur) {
//             addVal += node.val
//             addList.push(node.val)
//         }
//         if (addVal === sum && lastCur) {
//             saveList.push(addList)
//             addList = [root.val]
//             addVal = root.val;
//             return
//         }
//         if (Math.abs(node.val) > Math.abs(sum) || Math.abs(addVal) > Math.abs(sum)) {
//             // 当前节点或者和值大于寻找的sum
//             if (lastCur && lastCur.right) {
//                 let popData = addList.pop();
//                 addVal -= popData;
//                 return;
//             } else {
//                 return;
//             }
//         }
//         dfs(node.left, node)
//         dfs(node.right, node)
//     }
//     if (!root.right && !root.left) {
//         // 只有根节点情况
//         if (sum === root.val) {
//             return [[root.val]]
//         } else {
//             return []
//         }
//     }
//     dfs(root);
//     return saveList;
// }

function backtrack(root, sum, res, tempList) {
    if (root === null) return;
    if (root.left === null && root.right === null && sum === root.val)
        return res.push([...tempList, root.val]);

    tempList.push(root.val);
    backtrack(root.left, sum - root.val, res, tempList);

    backtrack(root.right, sum - root.val, res, tempList);
    tempList.pop();
}
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function (root, sum) {
    if (root === null) return [];
    const res = [];
    backtrack(root, sum, res, []);
    return res;
};



let root = getTreeFromLayerOrderArray([1,2,null,3,null,4,null,5])

console.log(root)

console.log(pathSum(root, 6))
