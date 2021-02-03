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

// 左节点 (x - 1, y - 1)  右节点 (x + 1, y - 1)
// 其中节点需要按 y 坐标从最高到最低排序。如果 报告 中任意两个节点的 y 坐标相同，则值较小的节点应排在前面。
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let verticalTraversal = function(root) {
    let initX = 0,initY = 0;
    let getTreeNumber = [];
    let findMap = {};
    function findXTree(node, x, y) {
        if (!node) return;
        let cur = {
            val: node.val,
            y: y,
        }
        if (!findMap[x]) {
            findMap[x] = [cur]
        } else {
            // 只需要判断数组最后个值的y
            if ((findMap[x][findMap[x].length - 1].y === cur.y && findMap[x][findMap[x].length - 1].val > cur.val)) {
                // 需要交换位置
                // 从后往前找插入到合适的位置

                // let temp = findMap[x].pop();
                // findMap[x] = [...findMap[x], cur, temp]
                let findInsertIndex = -1;
                for (let i = findMap[x].length - 1; i != -1; i--) {
                    if (findMap[x][i].val > cur.val && cur.y == findMap[x][i].y) {
                        continue;
                    } else {
                        findInsertIndex = i + 1;
                        break;
                    }
                }
                if (findInsertIndex != -1) {
                    findMap[x].splice(findInsertIndex, 0, cur)
                } else {
                    let temp = findMap[x].pop();
                    findMap[x] = [...findMap[x], cur, temp]
                }
            } else if (findMap[x][findMap[x].length - 1].y < cur.y) {
                // 向前插入
                let findInsertIndex = -1;
                for (let findIndex in findMap[x]) {
                    if (findMap[x][findIndex].y < cur.y) {
                        findInsertIndex = findIndex
                        break;
                    } else if (findMap[x][findIndex].y == cur.y) {
                        // 出现y坐标相等的情况,越小的值越在前面 -- 插入最后的合适位置
                        if (findMap[x][findIndex].val > cur.val) {
                            findInsertIndex = findIndex
                            break;
                        }
                    }
                }
                findMap[x].splice(findInsertIndex, 0, cur)
            } else {
                findMap[x] = [...findMap[x], cur]
            }
        }        

        findXTree(node.left, x - 1, y - 1)
        findXTree(node.right, x + 1, y - 1)
    }
    findXTree(root, initX, initY)
    // 最小到大 推入栈中
    Object.keys(findMap).sort(function (x, y) {
        return x - y
    }).forEach(key => {
        let itemData = findMap[key].map(item => {
            return item.val;
        })
        getTreeNumber.push(itemData)
    })
    // for (let key in findMap) {
    //     getTreeNumber.push(findMap(key))
    // }
    return getTreeNumber
};

// [[0],[1],[3,2,2],[4]]
console.log(verticalTraversal(getTreeFromLayerOrderArray([0,6,1,13,8,2,17,22,null,10,null,null,3,21,20,31,null,11,14,24,4,null,29,null,null,null,null,25,19,40,32,null,37,15,5,null,null,null,26,null,null,null,null,null,null,null,null,27,34,18,7,35,null,39,null,null,null,23,28,9,33,null,null,41,null,38,null,null,null,12,36,null,null,null,null,null,43,16,null,null,null,44,null,30,null,null,null,42])))