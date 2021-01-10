// 有效括号
// '{' '}' '(' ')' '[' ']'
let isValid = function(s) {
    let matchStr = {
        '{': '}',
        '(': ')',
        '[': ']',
    }
    let matchArr = []


    for (let i = 0; i < s.length; i++) {
        let str = matchStr[s[i]]
        if (str) {
            matchArr.push(str)
        } else {
            if (matchArr.length && matchArr[matchArr.length - 1] == s[i]) {
                matchArr.pop()
            } else {
               return false
            }
        }
    }

    if (matchArr.length) {
        return false
    } else {
        return true
    }
};
