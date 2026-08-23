class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const n = nums.length

        nums.sort((a, b) => a - b)

        let lastSmaller = -Infinity
        let count = 0
        let longest = 0

        for (let i = 0; i < n; i++) {
            if (nums[i] - 1 === lastSmaller) {
                count++
                lastSmaller = nums[i]
            } else if (nums[i] !== lastSmaller) {
                count = 1
                lastSmaller = nums[i]
            }

            longest = Math.max(longest, count)
        }

        return longest
    }

}
