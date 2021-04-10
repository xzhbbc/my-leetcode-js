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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k == 1) return head;
  function revertNode(node) {
    let num = 0;
    let saveHead = node;
    // let newNodeList = new ListNode();
    let cur = node;
    let pre = null;
    while (num < k && cur != null) {
      num++;
      let next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    if (num < k) {
      // 需要复原
      let cur = pre;
      pre = null;
      while (num != 0) {
        num--;
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
      }
      return pre;
    }
    if (cur != null) {
      // 说明还能继续前进
      const newRevetNode = revertNode(cur);
      saveHead.next = newRevetNode;
    //   cur.next = newRevetNode;
    }
    if (pre) {
      return pre;
    } else {
      return cur;
    }
  }
//   const data = revertNode(head);
  return revertNode(head);
};

console.log(reverseKGroup(getListFromArray([1, 2]), 2));

// console.log(reverseKGroup(getListFromArray([1, 2, 3, 4, 5]), 1))
