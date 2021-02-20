/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  // 较小的值
  this.min_heap = [null];
  // 较大的值
  this.max_heap = [null];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  //   if (this.max_heap.length > 0 && num < -this.max_heap[1]) {
  //     heapPush(this.max_heap, -num);
  //   } else {
  //     heapPush(this.min_heap, num);
  //   }
  heapPush(this.min_heap, num);
  heapPush(this.max_heap, -headPop(this.min_heap));
  //   if (this.min_heap.length < this.max_heap.length) {
  //       heapPush(this.min_heap, -headPop(this.max_heap))
  //   }
  // 大堆的个数要比小堆的个数多1
  if (this.max_heap.length > this.min_heap.length + 1) {
    let popData = headPop(this.max_heap);
    heapPush(this.min_heap, -popData);
  } else if (this.min_heap.length > this.max_heap.length) {
    let popData = headPop(this.min_heap);
    heapPush(this.max_heap, -popData);
  }

  function heapPush(heap, num) {
    heap.push(num);

    if (heap.length > 1) {
      let current = heap.length - 1;

      while (current > 1 && heap[Math.floor(current / 2)] < heap[current]) {
        /* Swapping the two nodes by using the ES6 destructuring syntax*/
        [heap[Math.floor(current / 2)], heap[current]] = [
          heap[current],
          heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }

  function headPop(heap) {
    let smallest = heap[1];

    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length === 3) {
        if (heap[1] < heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return smallest;
      }

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (
        (heap[leftChildIndex] != null &&
          heap[leftChildIndex] > heap[current]) ||
        (heap[rightChildIndex] != null && heap[rightChildIndex] > heap[current])
      ) {
        if (heap[rightChildIndex] == null) {
          [heap[current], heap[leftChildIndex]] = [
            heap[leftChildIndex],
            heap[current],
          ];
          break;
        }
        if (heap[leftChildIndex] > heap[rightChildIndex]) {
          [heap[current], heap[leftChildIndex]] = [
            heap[leftChildIndex],
            heap[current],
          ];
          current = leftChildIndex;
        } else {
          [heap[current], heap[rightChildIndex]] = [
            heap[rightChildIndex],
            heap[current],
          ];
          current = rightChildIndex;
        }
        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (heap.length === 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }

    return smallest;
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.min_heap.length == this.max_heap.length) {
    return (this.min_heap[1] - this.max_heap[1]) / 2;
  }
  return -this.max_heap[1];
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
var obj = new MedianFinder();
// obj.addNum(1);
// obj.addNum(2);
// console.log(obj.findMedian());
// obj.addNum(3);
// obj.addNum(4);
// console.log(obj.findMedian());
// obj.addNum(-1)
// // console.log(obj.findMedian())
// obj.addNum(-2)
// console.log(obj.findMedian())
// obj.addNum(-3)
// console.log(obj.findMedian())

function checkData(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length == 0) {
      console.log(obj.findMedian());
    } else {
      obj.addNum(array[i][0]);
    }
  }
}

checkData([
  [],
  [117],
  [],
  [309],
  [],
  [156],
  [],
  [76],
  [],
  [3],
  [],
  [201],
  [],
  [29],
  [],
  [281],
  [],
  [272],
  [],
  [242],
  [],
  [72],
  [],
  [251],
  [],
]);
