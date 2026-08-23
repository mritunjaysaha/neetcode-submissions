/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null

        const oldToNew = new Map()
        const queue = []

        oldToNew.set(node, new Node(node.val))
        queue.push(node)

        while (queue.length) {
            const node = queue.pop()

            for (const nei of node.neighbors) {
                if (!oldToNew.has(nei)) {
                    oldToNew.set(nei, new Node(nei.val))
                    queue.push(nei)
                }

                oldToNew.get(node).neighbors.push(oldToNew.get(nei))
            }
        }

        return oldToNew.get(node)
    }
}
