// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
//
// 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
//
// 注意你不能在买入股票前卖出股票。

/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
    let min = Number.MAX_VALUE
    // let minIndex = 0
    let money = 0

    for (let i = 0; i < prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i]
            // minIndex = i
        } else {
            if (i != 0) {
                money = Math.max(money, prices[i] - min)
            }
        }
    }

    return money
};