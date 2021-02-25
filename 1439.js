/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
let kthSmallest = function (mat, k) {
  /**
   * 思路：
   * 将多维数组想像成坐标
   * 每次推进一个值，需要记录和+坐标
   * 首先生成一个最小堆，每次pop出一个最小值，进行上下指针的位移，也就+1就行。
   * 注意不要重复计算坐标，出现重复的情况，说明这个值是符合条件的，因此接近k的情况+1
   */
  let setCoors = [];
  let coorsMap = {};
  let cur = {
    sum: mat.reduce((total, data) => {
      setCoors.push(0);
      return total + data[0];
    }, 0),
    coords: setCoors,
  };
  coorsMap[setCoors.toString()] = true;
  let headTree = new HeadTree();
  headTree.headPush(cur);
  for (let i = 0; i < k; i++) {
    let { sum, coords } = headTree.headPop();
    cur = {
      sum,
      coords,
    };
    for (let j = 0; j < coords.length; j++) {
      if (coords[j] != mat[0].length - 1) {
        let nowCoors = [...coords];
        nowCoors[j] += 1;
        if (!coorsMap[nowCoors.toString()]) {
          coorsMap[nowCoors.toString()] = true;
          let nowCur = {
            sum: sum - mat[j][coords[j]] + mat[j][nowCoors[j]],
            coords: nowCoors,
          };
          headTree.headPush(nowCur);
        }
      }
    }
  }

  return cur.sum;
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
        this.headTree[Math.floor(current / 2)].sum > this.headTree[current].sum
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
        if (this.headTree[1].sum > this.headTree[2].sum) {
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
        (this.headTree[current].sum > this.headTree[leftChildIndex].sum ||
          (this.headTree[rightChildIndex] != null &&
            this.headTree[current].sum > this.headTree[rightChildIndex].sum))
      ) {
        if (this.headTree[rightChildIndex] == null) {
          [this.headTree[leftChildIndex], this.headTree[current]] = [
            this.headTree[current],
            this.headTree[leftChildIndex],
          ];
          break;
        }
        if (
          this.headTree[leftChildIndex].sum < this.headTree[rightChildIndex].sum
        ) {
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

console.log(
  kthSmallest(
    [
        [1,1,10],[2,2,9]
    ],
    7
  )
);
