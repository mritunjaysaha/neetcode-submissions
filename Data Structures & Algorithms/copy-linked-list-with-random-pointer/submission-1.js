// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let iter = head
        let front = head

        while (iter) {
            front = iter.next

            let copy = new Node(iter.val)
            iter.next = copy
            copy.next = front

            iter = front
        }

        iter = head

        while (iter) {
            if (iter.random) {
                iter.next.random = iter.random.next
            }

            iter = iter.next.next
        }

        iter = head

        let newHead = new Node(0)
        let copy = newHead

        while (iter) {
            front = iter.next.next

            copy.next = iter.next
            iter.next = front

            copy = copy.next
            iter = front
        }

        return newHead.next
    }
}
