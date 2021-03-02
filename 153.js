/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length - 1, mid = 0;
    if (nums.length === 1) return nums[0]
    while(left <= right) {
        mid = Math.floor(left + (right - left) / 2)
        if (nums[left] < nums[right]) {
            return nums[left]
        }    
        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right = mid
        }
        if (left == right) break;
    }
    return nums[left]
};

console.log(findMin([3, 1, 2]))