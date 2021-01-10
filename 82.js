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

const l1 = getListFromArray([1,1,1,2,2,2,3])

const deleteDuplicates = function(head) {
    let cur = head;
    let isAdd = true;
    let newList = new ListNode(null, null);
    let preCur;
    let addCur = newList;
    let hasSaveMap = {};
    while (cur) {
        if (hasSaveMap[cur.val]) {
            if (preCur.next && cur.val == preCur.next.val) {
                // console.log(preCur);
                preCur.next = null;
                addCur = preCur;
            }
        } else {
            let node = new ListNode(null, null);
            node.val = cur.val;
            addCur.next = node;
            preCur = addCur;
            addCur = node;
            hasSaveMap[cur.val] = true;
        }
        cur = cur.next;
        // addCur = node;
    }
    return newList.next;
};

const data = deleteDuplicates(l1);

logList(data);
