class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length
        const res = []

        for (let i = 0; i <= n - k; i++) {
            let max = nums[i]

            for (let j = i; j < i + k; j++) {
                max = Math.max(nums[j], max)
            }

            res.push(max)
        }

        return res
    }
}
