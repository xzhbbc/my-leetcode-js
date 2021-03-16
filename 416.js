/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  var canPartition = function(nums) {
//     let leftSum = 0
//     let rightSum = 0

//     if (nums == null || nums.length == 1) return false
//     if (nums.length == 2) {
//         if (nums[0] == nums[1]) {
//             return true
//         } else {
//             return false
//         }
//     }

//     nums.sort(function (a, b) {
//         return a - b
//     })

//     let mid = Math.floor(nums.length / 2)
//     for (let i = 0; i < nums.length; i++) {
//         if (i <= mid) {
//             leftSum += nums[i]
//         } else {
//             rightSum += nums[i]
//         }
//     }

//     while (leftSum != rightSum) {
//         let cur
//         if (leftSum < rightSum) {
//             // 从mid左边开始找
//             mid += 1
//             if (mid > nums.length) return false
//             cur = nums[mid]
//             rightSum -= cur
//             leftSum += cur
//             if (leftSum > rightSum) return false
//         } else {
//             mid -= 1
//             if (mid < 0) return false
//             cur = nums[mid]
//             leftSum -= cur
//             rightSum += cur
//             if (leftSum < rightSum) return false
//         }
//     }

//     return true
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = nums.reduce((acc, num) => acc + num, 0)
  if (sum % 2 == 0) {
    sum = sum / 2;
    const dp = Array(sum + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < nums.length; i++) {
        for (let j = sum; j > 0; j--) {
          dp[j] = dp[j] || (j - nums[i] >= 0 && dp[j - nums[i]]);
        }
      }
    
      return dp[sum];
  } else {
    return false;
  }
};

// console.log(canPartition([1, 2, 3, 5]));

// console.log(canPartition([2, 2, 3, 5]));

// console.log(canPartition([1, 2, 5]))

console.log(canPartition([1,5,11,5]))

// console.log(canPartition([1,1,1,1]))

// console.log(canPartition([1, 2, 3, 4, 5, 6, 7]));
