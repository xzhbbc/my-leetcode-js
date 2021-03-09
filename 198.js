/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let a = 0, b = 0;
    if (nums.length == 0) return 0
    for (let i = 0; i < nums.length; i++) {
        const temp = b
        b = Math.max(a + nums[i], b)
        a = temp
    }
    return b
};

var rob = function(nums) {
    const dp = []
    dp[0] = 0
    dp[1] = 0
    for (let i = 2; i < nums.length + 2; i++) {
        dp[i] = Math.max(nums[i - 2] + dp[i - 2], dp[i - 1])
    }
    return dp[dp.length - 1]
}

console.log(rob([2,1,1,2]))

// console.log(rob([2,7,9,3,1]))