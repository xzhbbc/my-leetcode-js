/*设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。*/

/**
 * initialize your data structure here.
 */
let MinStack = function() {
    this.stack = []
    this.min = Number.MAX_VALUE
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const min = this.min;
    if (x < this.min) {
        this.min = x;
    }
    this.stack.push(x - min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const item = this.stack.pop()
    const min = this.min;

    if (item < 0) {
        this.min = min - item;
    }
    // console.log()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const item = this.stack[this.stack.length - 1];
    const min = this.min;

    if (item < 0) {
        return min;
    }
    return item + min;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

let minStack = new MinStack()

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.stack)
minStack.getMin();
minStack.pop();
console.log(minStack.top())
console.log(minStack.getMin())


