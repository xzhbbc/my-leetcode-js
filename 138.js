// 待完成

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

// 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
const copyRandomList = function(head) {
    let newNodeList = new Node(null, null, null);
    let cur = newNodeList;
    let saveMap = {};
    let curMap = {};
    for (let i = 0; i < head.length; i++) {
        let newNode = new Node(null, null, null);
        if (head[i][0]) {
            newNode.val = head[i][0];
            if (head[i][1]) {
                if (curMap[head[i][1]]) {
                    // 前面有的
                    newNode.random = curMap[head[i][1]];
                } else if (saveMap[i]) {
                    // 后面才有的
                    saveMap[i] = newNode;
                } else {
                    saveMap[head[i][1]] = newNode.random;
                }

            } else {
                newNode.random = null;
            }
            curMap[i] = newNode;
            cur.next = newNode;
            cur = newNode.next;
        }
    }

    return newNodeList;
};
console.log(copyRandomList([[7,null],[13,0],[11,4],[10,2],[1,0]]))
