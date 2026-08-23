class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length

        const stack = []
        let maxArea = 0

        for (let i = 0; i <= n; i++) {
            const currentHeight = i === n ? 0 : heights[i]

            while (stack.length && heights[stack[stack.length - 1]] > currentHeight) {
                const height = heights[stack.pop()]
                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1

                maxArea = Math.max(maxArea, height * width)
            }

            stack.push(i)
        }

        return maxArea
    }
}
