/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let len = cost.length
    if (len == 1) return 0
    const dp = new Array(len)
    dp[0] = Math.min(0, cost[0])
    dp[1] = Math.min(cost[0], cost[1])
    for (let i = 2; i < len; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i], cost[i- 1] + dp[i - 2])
    }
    return dp[dp.length - 1]
};

  console.log(minCostClimbingStairs([10, 15]))