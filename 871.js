/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    // 记录移动的公里
    let moveTarget = 0
    let nowFuel = startFuel
    let headTree = new HeadTree()
    let targetFuel = 0
    function checkFuel(curDistance) {
        while(nowFuel < curDistance) {
            let hasFuel = -headTree.headPop()
            if (hasFuel) {
                targetFuel += 1
                nowFuel += hasFuel
            } else {
                return -1
            }
        }
    }
    // 经过油站
    for (let i = 0; i < stations.length; i++) {
       // 每次经过油站消耗的油 
       let specFuel = stations[i][0] - moveTarget
       moveTarget = stations[i][0]
       
       if (nowFuel < specFuel) {
           // 不够油消耗
           if (checkFuel(specFuel) === -1) {
               return -1
           }
       }
       headTree.headPush(-stations[i][1])
       nowFuel -= specFuel
    }

    // 过了油站
    // 剩下的公里
    let specDistance = target - moveTarget;
    if (checkFuel(specDistance) === -1) {
        return -1
    }
    return targetFuel;
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
          if (
            this.headTree[leftChildIndex] < this.headTree[rightChildIndex]
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

//   console.log(minRefuelStops(1000,
//     83,
//     [[47,220],[65,1],[98,113],[126,196],[186,218],[320,205],[686,317],[707,325],[754,104],[781,105]]))

    // console.log(minRefuelStops(100,
    //     10,
    //     [[10,60],[20,30],[30,30],[60,40]]))

    console.log(minRefuelStops(100,
        1,
        [[10,100]]))

    // console.log(minRefuelStops(1,
    //     1,
    //     []))

    // console.log(minRefuelStops(100,
    //     25,
    //     [[25,25],[50,25],[75,25]]))