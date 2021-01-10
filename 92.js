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

const l1 = getListFromArray([1, 2, 3])

const reverseBetween = function(head, m, n) {
    let nextNode = head;
    let preNode;
    let saveStart;
    let preSaveStart;
    let last;
    let preLast;
    let i = 1;

    while (nextNode && !last) {
        let save = nextNode.next;
        if (i > m && i <= n) {
            nextNode.next = preNode;
            preLast = nextNode;
        } else {
            if (i < m) {
                // 保存第一个开始的节点
                preSaveStart = nextNode;
            }
            if (i === m) {
                // 保存第一个反转的节点
                saveStart = nextNode;
            }
            if (i === n + 1) {
                last = nextNode;
            }
        }
        i++;
        // 保存上一个节点
        preNode = nextNode;
        // 继续
        nextNode = save;
    }

    // 拼接
    if (preLast) {
        if (preSaveStart) {
            preSaveStart.next = preLast;
        } else {
            // 处理没有前驱的情况，直接断环即可
            head = preLast;
        }
        // 避免在最后个节点的情况
        if (last) {
            saveStart.next = last;
        } else {
            saveStart.next = null;
        }
    }
    return head;
};

const data = reverseBetween(l1, 2, 3)

logList(data);
