// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
//
// 说明：本题中，我们将空字符串定义为有效的回文串。toLowerCase

let isPalindrome = function(s) {
    let regNumber = /\d+/; //验证0-9的任意数字最少出现1次。
    let regString = /[a-zA-Z]+/; //验证大小写26个字母任意字母最少出现1次。
    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (s[left] && (regNumber.test(s[left]) || regString.test(s[left]))) {
            if (s[right] && (regNumber.test(s[right]) || regString.test(s[right]))) {
                if (s[left].toUpperCase() != s[right].toUpperCase()) {
                    return false
                } else {
                    left++
                    right--
                }
            } else {
                right--
            }
        } else {
            left++
        }
    }



    return true
};

console.log(isPalindrome("race a car"))

// export default isPalindrome