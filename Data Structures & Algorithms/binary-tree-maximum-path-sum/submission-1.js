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
     * @return {number}
     */
    maxPathSum(root) {
        let res = [root.val];
        this.dfs(root, res);
        return res[0];
    }

    dfs(root, res) {
        if (root === null) return 0;

        const currLeft = this.dfs(root.left, res);
        const currRight = this.dfs(root.right, res);

        const leftMax = Math.max(currLeft, 0);
        const rightMax = Math.max(currRight, 0);

        res[0] = Math.max(res[0], root.val + leftMax + rightMax);

        return root.val + Math.max(leftMax, rightMax);
    }
}
