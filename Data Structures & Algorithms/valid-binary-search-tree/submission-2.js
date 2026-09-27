/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        if (root === null) {
            return true;
        }

        const arr = [[-Infinity, root, Infinity]];

        while (arr.length > 0) {
            const [left, node, right] = arr.pop();

            if (!(left < node.val && node.val < right)) {
                return false;
            }

            if (node.left) {
                arr.push([left, node.left, node.val]);
            }

            if (node.right) {
                arr.push([node.val, node.right, right]);
            }
        }

        return true;
    }
}
