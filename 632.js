/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
    function pushMinData(headTree, dataList, setCoors) {
        let setMap = {
            sum: Math.abs(dataList[dataList.length - 1] - dataList[0]),
            coors: setCoors
        }
        headTree.headPush(setMap)
    }
    let pointerMap = {}
    let setCoors = []
    let dataList = []
    let headTree = new HeadTree()
    nums.forEach(item => {
        setCoors.push(0)
        dataList.push(item[0])
    })
    dataList.sort(function (a, b) {
        return a-b;
    })
    let minPointer = {
        data: Math.abs(dataList[dataList.length - 1] - dataList[0]),
        pointer: [dataList[0], dataList[dataList.length - 1]]
    }
    pushMinData(headTree, dataList, setCoors)

    while (true) {
        const {sum, coors} = headTree.headPop()
        for (let i = 0; i < coors.length; i++) {
            let nowDataList = []
            let newCoors = [...coors]
            newCoors[i] += 1
            newCoors.forEach((item, i) => {
                nowDataList.push(nums[i][item])
            })
            nowDataList.sort(function (a, b) {
                return a-b;
            })
            let spec = Math.abs(nowDataList[nowDataList.length - 1] - nowDataList[0])
            if (minPointer.data > spec) {
                minPointer = {
                    data: spec,
                    pointer: [nowDataList[0], nowDataList[nowDataList.length - 1]]
                }
            }
            if (newCoors[newCoors.length - 1] === nums[0].length) return minPointer.pointer;
            pushMinData(headTree, nowDataList, newCoors)
        }
    }
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

  console.log(smallestRange([[11,38,83,84,84,85,88,89,89,92],[28,61,89],[52,77,79,80,81],[21,25,26,26,26,27],[9,83,85,90],[84,85,87],[26,68,70,71],[36,40,41,42,45],[-34,21],[-28,-28,-23,1,13,21,28,37,37,38],[-74,1,2,22,33,35,43,45],[54,96,98,98,99],[43,54,60,65,71,75],[43,46],[50,50,58,67,69],[7,14,15],[78,80,89,89,90],[35,47,63,69,77,92,94]]))