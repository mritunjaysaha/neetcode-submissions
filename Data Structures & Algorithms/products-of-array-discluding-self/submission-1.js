class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length

        let prod = 1
        let zeroCount = 0

        for (let num of nums) {
            if (num !== 0) {
                prod *= num
            } else {
                zeroCount++
            }
        }

        if (zeroCount > 1) {
            return Array(n).fill(0)
        }

        const res = new Array(nums.length)

        for (let i = 0; i < n; i++) {
            if (zeroCount > 0) {
                res[i] = (nums[i] === 0) ? prod : 0

            } else {
                res[i] = prod / nums[i]
            }
        }

        return res
    }
}
