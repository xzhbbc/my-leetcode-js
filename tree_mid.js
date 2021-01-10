// 二叉树
// 输入 [1,null,2,3]
// 输出 [1,3,2]

function midSearch(arr) {
    let stack = [];
    stack.push(arr[0]);
    while(arr.length != 0) {
        arr.shift();
        if (arr[0] != null) {
            let change = stack[stack.length - 1];
            stack[stack.length - 1] = arr[0];
            stack.push(change);
            arr.shift();
        }
        if (arr[1] != null) {
            stack.push(arr[1]);
            arr.shift();
        }
    }
    return stack;
}

console.log(midSearch([1,null,2,3]))
