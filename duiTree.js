function heapSort(items) {
  // 构建大顶堆
  buildHeap(items, items.length - 1);
  console.log(items);
  // 设置堆的初始有效序列长度为 items.length - 1
  let heapSize = items.length - 1;
  for (var i = items.length - 1; i > 1; i--) {
    // 交换堆顶元素与最后一个有效子元素
    swap(items, 1, i);
    // 有效序列长度减 1
    heapSize--;
    // 堆化有效序列(有效序列长度为 currentHeapSize，抛除了最后一个元素)
    heapify(items, heapSize, 1);
  }
  return items;
}

// 原地建堆
// items: 原始序列
// heapSize: 有效序列长度
function buildHeap(items, heapSize) {
  // 从最后一个非叶子节点开始，自上而下式堆化
  for (let i = Math.floor(heapSize / 2); i >= 1; --i) {
    heapify(items, heapSize, i);
  }
}
function heapify(items, heapSize, i) {
  // 自上而下式堆化
  while (true) {
    var maxIndex = i;
    if (2 * i <= heapSize && items[i] < items[i * 2]) {
      maxIndex = i * 2;
    }
    if (2 * i + 1 <= heapSize && items[maxIndex] < items[i * 2 + 1]) {
      maxIndex = i * 2 + 1;
    }
    if (maxIndex === i) break;
    swap(items, i, maxIndex); // 交换
    i = maxIndex;
  }
}
function swap(items, i, j) {
  let temp = items[i];
  items[i] = items[j];
  items[j] = temp;
}

// 测试
var items = [, 1, 9, 2, 8, 3, 7, 4, 6, 5];
heapSort(items);
// [empty, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let MaxTreePro = function () {
  this.maxTree = [null];

  this.addNum = function (num) {
    this.maxTree.push(num);

    if (this.maxTree.length > 1) {
      let current = this.maxTree.length - 1;

      while (
        current > 1 &&
        this.maxTree[Math.floor(current / 2)] < this.maxTree[current]
      ) {
        [this.maxTree[current], this.maxTree[Math.floor(current / 2)]] = [
          this.maxTree[Math.floor(current / 2)],
          this.maxTree[current],
        ];
        current = Math.floor(current / 2);
      }
    }
  };

  this.popNum = function () {
    let topData = this.maxTree[1];

    if (this.maxTree.length > 2) {
      this.maxTree[1] = this.maxTree[this.maxTree.length - 1];
      this.maxTree.splice(this.maxTree.length - 1);

      let current = 1;
      let rightChildIndex = current * 2;
      let leftChildIndex = current * 2 + 1;

      while (
        this.maxTree[rightChildIndex] &&
        this.maxTree[leftChildIndex] &&
        (this.maxTree[rightChildIndex] > this.maxTree[current] ||
          this.maxTree[leftChildIndex] > this.maxTree[current])
      ) {
        if (this.maxTree[leftChildIndex] > this.maxTree[rightChildIndex]) {
          [this.maxTree[current], this.maxTree[leftChildIndex]] = [
            this.maxTree[leftChildIndex],
            this.maxTree[current],
          ];
          current = rightChildIndex;
        } else {
          [this.maxTree[current], this.maxTree[rightChildIndex]] = [
            this.maxTree[rightChildIndex],
            this.maxTree[current],
          ];
          current = leftChildIndex;
        }
        rightChildIndex = current * 2;
        leftChildIndex = current * 2 + 1;
      }
    } else if (this.maxTree.length === 2) {
      this.maxTree.splice(1, 1);
    } else {
      return null;
    }

    return topData;
  };
};

const maxTreePro = new MaxTreePro();

maxTreePro.addNum(1);
maxTreePro.addNum(2);
maxTreePro.addNum(3);
maxTreePro.addNum(4);
maxTreePro.addNum(5);
console.log(maxTreePro.popNum(), 'pop')
console.log(maxTreePro.popNum(), 'pop')

console.log(maxTreePro.maxTree);
