/*给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？*/
// 输入: [4,1,2,1,2]
// 输出: 4

let singleNumber = function(nums) {
    let ret = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        ret = ret ^ element;
    }
    return ret;
};

console.log(singleNumber([2,2,1]))
