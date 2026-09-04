class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n = heights.length;

        let l = 0;
        let r = n - 1;

        let maxWater = 0;

        while (l < r) {
            const water = (r - l) * Math.min(heights[l], heights[r]);

            maxWater = Math.max(maxWater, water);

            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxWater;
    }
}
