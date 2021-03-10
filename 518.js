/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  if (amount == 0) return 1;
  let dp = [Array(amount + 1).fill(1)];
  for (let i = 1; i < amount + 1; i++) {
    dp[i] = Array(coins.length + 1).fill(0);
    for (let j = 1; j < coins.length + 1; j++) {
      // 从1开始可以简化运算
      if (i - coins[j - 1] >= 0) {
        // 注意这里是coins[j -1]而不是coins[j]
        dp[i][j] = dp[i][j - 1] + dp[i - coins[j - 1]][j]; // 由于可以重复使用硬币所以这里是j不是j-1
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }

  return dp[dp.length - 1][coins.length];
};

var change = function (amount, coins) {
  if (amount === 0) return 1;

  const dp = [1].concat(Array(amount).fill(0));

  for (let j = 0; j < coins.length; j++) {
    for (let i = 1; i < amount + 1; i++) {
      if (i - coins[j] >= 0) {
        dp[i] = dp[i] + dp[i - coins[j]];
      }
    }
  }

  return dp[dp.length - 1];
};

console.log(change(5, [1, 2, 5]));

// console.log(change(5, [2, 5]));

// console.log(change(10, [10]))

// console.log(change(10, [5]))
