// 给定一个二叉树，找出其最大深度。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function(root) {
    const getLength = (root) => {
        if (!root) {
            return 0
        }
        let lLen = 1
        let rLen= 1
        if (root.left) {
            lLen += getLength(root.left)
        }
        if (root.right) {
            rLen += getLength(root.right)
        }
        return Math.max(lLen, rLen)
    }

    return getLength(root)
};

