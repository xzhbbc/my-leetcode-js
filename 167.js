// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
//
// 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

let twoSum = function(numbers, target) {
    let objIndex = []
    for (let i = 0; i < numbers.length; i++) {
        let otherIndex = getIndex(numbers, numbers[i], target, i + 1)
        if (otherIndex != '-1') {
            objIndex.push(i + 1)
            objIndex.push(otherIndex + 1)
            break
        }
    }

    return objIndex
};

let getIndex = function (nums, num, target, index) {
    let otherNum = target - num;
    for (let i = index; i < nums.length; i++) {
        if (otherNum == nums[i]) {
            return i
        }
    }

    return -1
}

console.log(twoSum([2, 7, 11, 15], 9))
