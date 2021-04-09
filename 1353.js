/**
 * @param {number[][]} events
 * @return {number}
 */
// 超时
// var maxEvents = function (events) {
//   let sortEvent = events.sort((a, b) => {
//     return a[1] - b[1];
//   });
//   let saveMap = {};
//   let meetingNum = 0;
//   // const dp = Array(sortEvent[sortEvent.length - 1][1]).fill(0)
//   //   console.log(sortEvent);
//   for (let i = 0; i < sortEvent.length; i++) {
//     let start = sortEvent[i][0];
//     let end = sortEvent[i][1];
//     while (start <= end) {
//       if (!saveMap[start]) {
//         meetingNum += 1;
//         saveMap[start] = true;
//         break;
//       }
//       start += 1;
//     }
//   }

//   return meetingNum;
// };

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function (events) {
  let sortEvent = events.sort((a, b) => {
    return a[0] - b[0];
  });
  let meetingNum = 0;
  let headTree = new HeadTree();
  let index = 0; // events的下标
  let maxDay = events[0][1]; // 现在遍历到的最大会议结束的天数
  for (let i = events[0][0]; index < events.length || i <= maxDay; i++) {
    for (; index < events.length && events[index][0] == i; index++) {
      if (maxDay < events[index][1]) {
        maxDay = events[index][1];
      }
      headTree.headPush(events[index][1]);
    }
    while (headTree.headTree.length > 1 && headTree.headTree[1] < i) {
      headTree.headPop();
    }
    if (headTree.headTree.length != 1) {
        meetingNum += 1;
        headTree.headPop();
    }
    if (index == events.length && headTree.headTree.length == 1) {
        break;
    }
  }
  // const dp = Array(sortEvent[sortEvent.length - 1][1]).fill(0)
  console.log(sortEvent);

  return meetingNum;
};

let HeadTree = function () {
  this.headTree = [null];

  this.headPush = function (number) {
    this.headTree.push(number);

    if (this.headTree.length > 1) {
      let current = this.headTree.length - 1;
      while (
        current > 1 &&
        this.headTree[Math.floor(current / 2)] != null &&
        this.headTree[Math.floor(current / 2)] > this.headTree[current]
      ) {
        [this.headTree[current], this.headTree[Math.floor(current / 2)]] = [
          this.headTree[Math.floor(current / 2)],
          this.headTree[current],
        ];
        current = Math.floor(current / 2);
      }
    }
  };

  this.headPop = function () {
    let smallest = this.headTree[1];
    if (this.headTree.length > 2) {
      const lastIndex = this.headTree.length - 1;
      this.headTree[1] = this.headTree[lastIndex];
      this.headTree.splice(lastIndex);

      if (this.headTree.length === 3) {
        if (this.headTree[1] > this.headTree[2]) {
          [this.headTree[1], this.headTree[2]] = [
            this.headTree[2],
            this.headTree[1],
          ];
        }
        return smallest;
      }

      let current = 1;
      let rightChildIndex = current * 2;
      let leftChildIndex = current * 2 + 1;

      while (
        this.headTree[leftChildIndex] != null &&
        (this.headTree[current] > this.headTree[leftChildIndex] ||
          (this.headTree[rightChildIndex] != null &&
            this.headTree[current] > this.headTree[rightChildIndex]))
      ) {
        if (this.headTree[rightChildIndex] == null) {
          [this.headTree[leftChildIndex], this.headTree[current]] = [
            this.headTree[current],
            this.headTree[leftChildIndex],
          ];
          break;
        }
        if (this.headTree[leftChildIndex] < this.headTree[rightChildIndex]) {
          [this.headTree[leftChildIndex], this.headTree[current]] = [
            this.headTree[current],
            this.headTree[leftChildIndex],
          ];
          current = leftChildIndex;
        } else {
          [this.headTree[rightChildIndex], this.headTree[current]] = [
            this.headTree[current],
            this.headTree[rightChildIndex],
          ];
          current = rightChildIndex;
        }
        rightChildIndex = current * 2;
        leftChildIndex = current * 2 + 1;
      }
    } else if (this.headTree.length == 2) {
      this.headTree.splice(1, 1);
    } else {
      return null;
    }
    return smallest;
  };
};

console.log(maxEvents([[1,4],[4,4],[2,2],[3,4],[1,1]]))

// console.log(
//   maxEvents([
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [1, 2],
//   ])
// );

// console.log(
//   maxEvents([
//     [1, 5],
//     [1, 5],
//     [1, 5],
//     [2, 3],
//     [2, 3],
//   ])
// );

// console.log(
//   maxEvents([
//     [1, 1],
//     [1, 2],
//     [1, 3],
//     [1, 4],
//     [1, 5],
//     [1, 6],
//     [1, 7],
//   ])
// );

// console.log(maxEvents([[1,2],[1,2],[1,6],[1,2],[1,2]]))

// console.log(maxEvents([[1,2],[1,2],[3,3],[1,5],[1,5]]))

// console.log(
//   maxEvents([
//     [7, 11],
//     [7, 11],
//     [7, 11],
//     [9, 10],
//     [9, 11],
//   ])
// );

// console.log(maxEvents([[7,11],[7,11],[7,19],[9,10],[9,11]]))
