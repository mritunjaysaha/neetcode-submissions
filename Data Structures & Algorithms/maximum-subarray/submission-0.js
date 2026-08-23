class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = Number.MIN_SAFE_INTEGER
        let sum = 0

        for (const num of nums) {
            sum += num

            max = Math.max(max, sum)

            if (sum < 0) {
                sum = 0
            }
        }

        return max
    }

}
