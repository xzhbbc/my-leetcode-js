/*
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    const size = nums.length;
    let slowP = 0;
    for (let fastP = 0; fastP < size; fastP++) {
        if (nums[fastP] !== nums[slowP]) {
            slowP++;
            nums[slowP] = nums[fastP]
        }
    }
    return slowP + 1
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

// index 0 splitIndex 0

// index 1 splitIndex 1




// [0,1,1,1,2,2,3,3,4]