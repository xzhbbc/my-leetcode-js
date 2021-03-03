/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
    // 思路
    // 先用砖块，不够用，前面的换成梯子
    // 将砖块数量需要最多的换成梯子
    let goHeight = 0
    let lastHeight = heights[0]
    let headTree = new HeadTree()
    for (let i = 1; i < heights.length; i++) {
        let needHeight = heights[i] - lastHeight
        if (lastHeight < heights[i]) {
            // 需要梯子或砖块
            headTree.headPush(-needHeight)
            // 优先用砖块
            if (needHeight > bricks) {
                // 无砖块情况，找出之前最高的高度差，用梯子补充回砖块
                if (ladders === 0) return goHeight
                let getBricks = -headTree.headPop()
                if (getBricks != needHeight) {
                    bricks += getBricks
                    bricks -= needHeight
                }
                ladders -= 1
                lastHeight = heights[i]
                goHeight = i
                continue
            } else {
                bricks -= needHeight
            }
        }
        lastHeight = heights[i]
        goHeight = i
        // if (ladders === 0 && bricks < needHeight) return goHeight
    }

    return goHeight
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

// console.log(furthestBuilding([14,3,19,3], 17, 0));


// console.log(furthestBuilding([4,2,7,6,9,14,12], 5, 1));

console.log(furthestBuilding([4,12,2,7,3,18,20,3,19], 10, 2));