class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0;
        let r = height.length - 1;

        let leftMax = height[l];
        let rightMax = height[r];

        let waterTrapped = 0;

        while (l < r) {
            if (leftMax < rightMax) {
                l++;
                leftMax = Math.max(leftMax, height[l]);

                waterTrapped += leftMax - height[l];
            } else {
                r--;
                rightMax = Math.max(rightMax, height[r]);

                waterTrapped += rightMax - height[r];
            }
        }

        return waterTrapped;
    }
}
