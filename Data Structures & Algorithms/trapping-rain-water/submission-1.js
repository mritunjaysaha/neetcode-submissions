class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length

        if (!height || n === 0) {
            return 0
        }

        let l = 0
        let r = n - 1
        let leftMax = height[l]
        let rightMax = height[r]
        let maxWater = 0

        while (l < r) {
            if (leftMax < rightMax) {
                l++
                leftMax = Math.max(leftMax, height[l])

                maxWater += leftMax - height[l]
            } else {
                r--
                rightMax = Math.max(rightMax, height[r])
                maxWater += rightMax - height[r]
            }
        }

        return maxWater
    }
}
