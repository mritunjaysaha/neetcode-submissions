class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const n = heights.length

        let res = 0

        let i = 0
        let j = n - 1

        while (i < j) {
            const water = (j - i) * Math.min(heights[i], heights[j])

            res = Math.max(water, res)

            if (heights[i] < heights[j]) {
                i++
            } else {
                j--
            }
        }

        return res

        return res
    }
}
