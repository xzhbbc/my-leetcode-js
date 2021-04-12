/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  while (headA || headB) {
    if (headA === headB) return headA;
    if (headA && headA.flag) {
      return headA;
    }
    if (headB && headB.flag) {
      return headB;
    }
    if (headA) {
      headA.flag = true;
      headA = headA.next;
    }
    if (headB) {
      headB.flag = true;
      headB = headB.next;
    }
  }
  return;
};
