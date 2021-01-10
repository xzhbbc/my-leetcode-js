
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

const l1 = getListFromArray([-10,-10,-9,-4,1,6,6])
const l2 = getListFromArray([])

const forList = (l1) => {
    let cur = l1;
    while (cur) {
        console.log(cur.val);
        cur = cur.next;
    }
}

// forList(l1);

// console.log(l1);
const mergeTwoLists = function(l1, l2) {
    let firstCur = l1;
    let secCur = l2;
    let head = new ListNode(null, null);
    let cur = head;
    while (firstCur || secCur) {
        if (!secCur) {
            cur.next = firstCur;
            break;
        }
        if (!firstCur) {
            cur.next = secCur;
            break;
        }
        let firstNode = new ListNode(null, null);
        let secNode = new ListNode(null, null);
        cur.next = firstNode;
        if (firstCur.val < secCur.val) {
            firstNode.val = firstCur.val;
            if (firstCur.next && (secCur.val < firstCur.next.val)) {
                // 正常情况
                firstNode.next = secNode;
                secNode.val = secCur.val;
            } else {
                if (!firstCur.next) {
                    firstNode.next = secCur;
                    cur = firstNode;
                    break;
                } else {
                    cur = firstNode;
                    firstCur = firstCur.next;
                    continue;
                }
            }
        } else {
            firstNode.val = secCur.val;
            if (secCur.next && (firstCur.val < secCur.next.val)) {
                firstNode.next = secNode;
                secNode.val = firstCur.val;
            } else {
                if (!secCur.next) {
                    firstNode.next = firstCur;
                    cur = firstNode;
                    break;
                } else {
                    cur = firstNode;
                    secCur = secCur.next;
                    continue;
                }
            }
        }
        firstCur = firstCur.next;
        secCur = secCur.next;
        cur = secNode;
    }

    return head.next;
};

let data = mergeTwoLists(l1, l2);

logList(data);
