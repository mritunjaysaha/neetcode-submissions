class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n = heights.length

        let res = 0


        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                const water = Math.min(heights[i], heights[j]) * (j - i)
                res = Math.max(res, water)
            }
        }

        return res
    }
}
