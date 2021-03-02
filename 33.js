/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    if (left === right) {
        if (nums[left] === target) {
            return left
        } else {
            return -1
        }
    }
    function findMid(now) {
        while(now < nums.length - 1 && nums[now] < nums[now + 1]) {
            now = now + 1;
        }
        return now
    }
    function findMinLeft(last) {
        let left = 0;
        if (nums[left] > target) {
            while(nums[left] > target && left < last) {
                left += 1
            }
        } else {
            while(nums[left] < target && left < last) {
                left += 1
            }
        }
        return left
    }
    let first = true;
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[left] < nums[mid] && nums[mid] < nums[mid + 1] && nums.length > 3 && first) {
            // 区间没有找对的情况
            first = false
            mid = findMid(mid)
        }
        if (nums[mid] === target) {
           left = mid
           right = left - 1
        } else if (nums[mid - 1] === target) {
           left = mid - 1
           right = left - 1
        } else if (nums[mid + 1] === target) {
            left = mid + 1
            right = left - 1
        } else if (nums[mid - 1] > target && nums[left] <= target) {
            // 值在这个区间
            console.log(nums[mid - 1], nums[left], target)
            right = mid - 1
        } else if (nums[mid + 1] < target && nums[right] >= target) {
            // 在这个区间
            left = mid + 1
        } else {
          if (first && nums[mid] < nums[left]) {
            // 左边存在无序情况
            first = false;
            left = findMinLeft(mid)
            if (nums[left] == target) {
                return left
            }
          } else {
            return -1  
          }
        }
    }

    if (left >= nums.length || nums[left] != target) return -1;
    return left;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1, mid = 0;
    while(left <= right) {
        mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] >= nums[left]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
}

// console.log(search([4,5,6,7,0,1,2],
//     0))

console.log(search(
    [1],
1))