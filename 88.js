// 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
    let ret = [];
    while (nums1.length || nums2.length) {
        // 为了方便大家理解，这里代码有点赘余
        if (nums1.length === 0) {
            ret.push(nums2.shift());
            continue;
        }

        if (nums2.length === 0) {
            ret.push(nums1.shift());
            continue;
        }
        const a = nums1[0];
        const b = nums2[0];
        if (a > b) {
            ret.push(nums2.shift());
        } else {
            ret.push(nums1.shift());
        }
    }
    return ret;
};

export default merge