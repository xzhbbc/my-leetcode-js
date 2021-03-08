/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    const dp = Array(s.length + 1)
    dp[0] = true
    for (let i = 0; i < s.length + 1; i++) {
        for (let word of wordDict) {
            if (word.length <= i && dp[i - word.length]) {
                if (s.substring(i - word.length, i) === word) {
                    dp[i] = true
                }
            }
        }
    }

    return dp[s.length] || false
};

console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]))