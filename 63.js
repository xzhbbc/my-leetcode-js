/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// var uniquePathsWithObstacles = function (obstacleGrid) {
//   if (obstacleGrid == null || obstacleGrid.length == 0) {
//     return 0;
//   }
// //   if (obstacleGrid.length == 1 && obstacleGrid[0] == 1) {
// //       return 0;
// //   }
//   let m = obstacleGrid.length,
//     n = obstacleGrid[0].length;
//   if (m == 1) {
//       for (let i = 0; i < n; i++) {
//           if (obstacleGrid[0][i] == 1) {
//             return 0;
//           }
//       }
//       return 1;
//   }
//   let dp = [Array(n).fill(1)];
// //   if (m == )
//   for (let i = 1; i < m; i++) {
//     dp[i] = Array(n).fill(0);
//     if (obstacleGrid[0][i] == 0) {
//       dp[i][0] = 1;
//     } else {
//       dp[i][0] = 0;
//     }
//     for (let j = 1; j < n; j++) {
//       if (obstacleGrid[i][j] == 0) {
//         dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//       }
//     }
//   }
//   return dp[m - 1][n - 1];
// };

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid == null || obstacleGrid.length == 0) {
    return 0;
  }
  let m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  let dp = [Array(n).fill(0)];
  let isBlock = false;
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i]) {
      dp[0][i] = 0;
      isBlock = true
    } else {
        if (!isBlock) {
            dp[0][i] = 1;
        } else {
            dp[0][i] = 0;
        }
    }
  }
  for (let i = 1; i < m; i++) {
    dp[i] = Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] == 0) {
        dp[i][j] = dp[i - 1][j] + (dp[i][j - 1] || 0);
      } else {
        dp[i][j] = 0;
      }
    }
  }

  return dp[m - 1][n - 1];
};

// console.log(uniquePathsWithObstacles([[0,1],[0,0]]))
// console.log(uniquePathsWithObstacles([[1, 0]]))
// console.log(uniquePathsWithObstacles([[0]]))
console.log(uniquePathsWithObstacles([[1], [0]]));

// console.log(
//   uniquePathsWithObstacles([
//     [0, 0, 0],
//     [0, 1, 0],
//     [0, 0, 0],
//   ])
// );
