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

console.log(search(
    [278,280,281,286,287,290,2,3,4,8,9,14,15,16,21,24,25,31,32,34,36,37,42,45,51,52,54,55,60,63,66,68,69,71,76,81,83,84,85,86,87,94,97,99,106,107,110,113,114,115,118,120,121,125,134,136,137,138,142,143,147,150,152,159,160,161,165,166,174,176,178,186,187,189,190,191,195,196,198,204,212,216,217,220,221,222,225,227,229,232,237,239,242,245,251,263,264,274,275,276,277],
286))