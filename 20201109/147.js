// 对链表进行插入排序。
// 插入排序的动画演示如上。从第一个元素开始，该链表可以被认为已经部分排序（用黑色表示）。
// 每次迭代时，从输入数据中移除一个元素（用红色表示），并原地将其插入到已排好序的链表中。
//
//
//
// 插入排序算法：
//
// 插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
// 每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
// 重复直到所有输入数据插入完为止。
//
//
// 示例 1：
//
// 输入: 4->2->1->3
// 输出: 1->2->3->4
// 示例2：
//
// 输入: -1->5->3->4->0
// 输出: -1->0->3->4->5


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function insertionSortList(head) {

  // 设置虚拟头结点是因为，它可能插入到链表头，为了和插入到别的位置的操作一致，给头结点加一个前置结点。
  const dummyHead = new ListNode(0);

  dummyHead.next = head;
  let cur = head;
  let prev = null;
  let temp = null;

  while (cur && cur.next) {
    if (cur.val <= cur.next.val) {
      cur = cur.next;
    } else {
      temp = cur.next; // 保存要移动的结点
      cur.next = cur.next.next;

      prev = dummyHead;
      while (prev.next.val <= temp.val) {// 找temp插入的位置，第一个大于temp.val的值的前面
        prev = prev.next;
      }
      // 做插入，先连后链，再连前链
      temp.next = prev.next;
      prev.next = temp;
    }
  }

  return dummyHead.next;
}

