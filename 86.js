function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

const getListFromArray = (a) => {
    let dummy = new ListNode()
    let pre = dummy;
    a.forEach(x => pre = pre.next = new ListNode(x));
    return dummy.next;
}

const logList = (node) => {
    let str = 'list: ';
    while (node) {
        str += node.val + '->';
        node = node.next;
    }
    str += 'end';
    console.log(str);
}

const l1 = getListFromArray([1, 4, 3, 2, 5, 2])

// const partition = function (head, x) {
//     let newNodeList = new ListNode(null, null);
//     let maxNodeList = new ListNode(null, null);
//     let cur = head;
//     let minCur = newNodeList;
//     let maxCur = maxNodeList;
//
//     while (cur) {
//         let newNode = new ListNode(null, null);
//         if (cur.val < x) {
//             newNode.val = cur.val;
//             minCur.next = newNode;
//             minCur = newNode;
//         } else {
//             newNode.val = cur.val;
//             maxCur.next = newNode;
//             maxCur = newNode;
//         }
//         cur = cur.next;
//     }
//     if (maxNodeList.next) {
//         minCur.next = maxNodeList.next;
//     }
//     return newNodeList.next;
// };


const partition = function (head, x) {
    let newNodeList = new ListNode(null, null);
    let preNodeList = new ListNode(null, null);
    preNodeList.next = head;
    let cur = head;
    let addCur = newNodeList;
    let pre = preNodeList;
    while (cur) {
        let newNode = new ListNode(null, null);
        if (cur.val < x) {
            newNode.val = cur.val;
            addCur.next = newNode;
            addCur = newNode;
            pre.next = cur.next;
        } else {
            pre = pre.next;
        }
        cur = cur.next;
    }
    if (preNodeList.next) {
        addCur.next = preNodeList.next;
    }
    return newNodeList.next;
};

const data = partition(l1, 3);

logList(data);
