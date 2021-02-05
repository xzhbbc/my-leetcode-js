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
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
let distanceK = function (root, target, K) {
  let numberList = [];

  let que = [root];
  let newRootTree = new PreTreeNode(root.val, null, null, null);
  let preQue = [newRootTree];
  while (que.length != 0) {
    let cur = que.pop();
    let saveCur = preQue.pop();

    if (cur.val === target.val) {
      // 找到目标值
      // 向下查找 -- 子节点
      findDown(cur, 0);
      // 向上查找 -- 祖节点
      // 判断是左节点还是右节点
      if (saveCur.pre != null) {
        let isLeftNode =
          (saveCur.pre.left ? saveCur.pre.left.val : saveCur.pre.left) ===
          cur.val;
        findUp(saveCur.pre, 1, isLeftNode);
      }
      break;
    }

    // 转换节点
    let preCur = new PreTreeNode(cur.val, cur.left, cur.right, saveCur.pre);

    if (cur.left) {
      que.push(cur.left);
      saveCur.left = new PreTreeNode(cur.left.val, null, null, preCur);
      preQue.push(saveCur.left);
    }

    if (cur.right) {
      que.push(cur.right);
      saveCur.right = new PreTreeNode(cur.right.val, null, null, preCur);
      preQue.push(saveCur.right);
    }
  }

  function PreTreeNode(val, left = null, right = null, node) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.pre = node;
  }

  function findDown(cur, path) {
    if (path == K) {
      // 找到了对应的路径
      numberList.push(cur.val);
      return;
    }
    // if (cur.left == null && cur.right == null) return;

    if (cur.left) {
      findDown(cur.left, path + 1);
    }
    if (cur.right) {
      findDown(cur.right, path + 1);
    }
  }

  function findUp(preCur, path, isLeftNode = false) {
    if (path == K) {
      numberList.push(preCur.val);
      return;
    }

    if (preCur.left && !isLeftNode) {
      findDown(preCur.left, path + 1);
    }
    if (preCur.right && isLeftNode) {
      findDown(preCur.right, path + 1);
    }
    if (preCur.pre) {
      let isLeftNode = (preCur.pre.left
        ? preCur.pre.left.val
        : preCur.pre.left) === preCur.val;
      findUp(preCur.pre, path + 1, isLeftNode);
    }
  }

  return numberList;
};

console.log(
  distanceK(
    getTreeFromLayerOrderArray([0, 2, 1, null, null, 3]),
    new TreeNode(3),
    3
  )
);
