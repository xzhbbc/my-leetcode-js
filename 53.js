// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

/**
 * @param {number[]} nums
 * @return {number}
 */

// 方法一： 数据太长，会超时
let maxSubArray1 = function(nums) {
    let calMax = nums.length
    let sumArr = [];

    const calSum = (lenSum, startIndex) => {
        let sum = 0;

        for (let i = startIndex; i < lenSum; i++) {
            sum += nums[i]
        }

        sumArr.push(sum)
        if ((startIndex + lenSum) <= nums.length) {
            // 还未计算完
            calSum(calMax, startIndex + 1)
        } else {
            if (calMax == 1) {
                return
            } else {
                calMax--
                calSum(calMax, 0)
            }
        }
        // calMax--
        // calSum(calMax)
    }

    calSum(calMax, 0)
    sumArr.sort(function (a, b) {
        return b - a
    })
    return sumArr[0]
};

let maxSubArray = function(nums) {
    let calMax = nums.length
    let maxSum = -Number.MAX_VALUE;

    const calSum = (startIndex) => {
        let sum = 0;
        for (let i = startIndex; i < calMax; i++) {
            sum += nums[i]
            maxSum = Math.max(maxSum, sum)
        }

        startIndex++
        if (startIndex == calMax) {
            return maxSum
        }
        return calSum(startIndex)
    }

    return calSum(0)
};


console.log(maxSubArray([-2]));

// 分治
// 分治法，每次从中间位置把数组分为左右中三部分， 分别求出左右中（这里中是包括中间元素的子序列）最大和。对左右分别深度递归，三者中最大值即为当前最大子序列和。
function helper(list, m, n) {
    if (m === n) return list[m];
    let sum = 0;
    let lmax = -Number.MAX_VALUE;
    let rmax = -Number.MAX_VALUE;
    const mid = ((n - m) >> 1) + m;

    for (let i = mid; i >= m; i--) {
        sum += list[i];
        if (sum > lmax) lmax = sum;
    }

    sum = 0;

    for (let i = mid + 1; i <= n; i++) {
        sum += list[i];
        if (sum > rmax) rmax = sum;
    }
    // console.log(((n - m) >> 1))
    const l = helper(list, m, mid);
    const r = helper(list, mid + 1, n);


    return Math.max(l, r, lmax + rmax);
}

function maxSubArray2(list) {
    return helper(list, 0, list.length - 1);
}

// 动态规划
// 动态规划，找到状态转移方程，求到当前位置最大和。
export function LSS(list) {
    const len = list.length;
    let max = list[0];
    for (let i = 1; i < len; i++) {
        list[i] = Math.max(0, list[i - 1]) + list[i];
        if (list[i] > max) max = list[i];
    }

    return max;
}

// console.log(LSS([-2,1,-3,4,-1,2,1,-5,4]))