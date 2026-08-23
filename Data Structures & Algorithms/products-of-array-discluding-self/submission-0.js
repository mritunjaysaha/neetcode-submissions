class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length
        const res = []
        let i = 0;
        let prod = 1

        for (let i = 0; i < n; i++) {
            let prod = 1
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    prod *= nums[j]
                }
            }

            res.push(prod)
        }

        return res
    }
}
