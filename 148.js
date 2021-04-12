function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const getListFromArray = (a) => {
  let dummy = new ListNode();
  let pre = dummy;
  a.forEach((x) => (pre = pre.next = new ListNode(x)));
  return dummy.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  function mergeSort(head) {
    if (!head.next) {
      return head;
    }
    let mid = findCenter(head);
    let leftNodeList;
    if (mid.next) {
      leftNodeList = mid.next;
      mid.next = null;
    } else {
      leftNodeList = mid;
      head.next = null;
    }

    let newNode = merge(mergeSort(leftNodeList), mergeSort(head));

    return newNode;
  }

  function merge(a, b) {
    let currentHead = b;
    let pre = null,
      cur = b;
    let saveA;
    if (cur.next) {
      while (cur) {
        if (a.val < cur.val) {
          saveA = a.next;
          a.next = cur;
          if (pre) {
            pre.next = a;
          } else {
            currentHead = a;
          }
          if (saveA) {
            // a还有节点没有处理
            return merge(saveA, currentHead);
          }
          return currentHead;
        }
        pre = cur;
        cur = cur.next;
      }
      pre.next = a;
      if (a.next) {
          saveA = a.next;
          a.next = null;
          return merge(saveA, currentHead);
      }
      return currentHead;
    } else {
      if (a.val < b.val) {
        a.next = b;
        return a;
      } else {
        b.next = a;
        return b;
      }
    }
  }

  function findCenter(node) {
    let slower = node,
      faster = node;
    while (faster && faster.next != null) {
      slower = slower.next;
      faster = faster.next.next;
    }
    return slower;
  }
  if(!head) {
      return head;
  }
  return mergeSort(head);
};

// console.log(sortList(getListFromArray([-1, 5, 3, 4, 0])));

// console.log(sortList(getListFromArray([])));

// console.log(sortList(getListFromArray([3,2,4])));

console.log(sortList(getListFromArray([4,19,14,5,-3,1,8,5,11,15])))
