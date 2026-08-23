class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const n = nums.length

        const res = []

        const backtrack = (nums, idx) => {
            if (idx === n) {
                res.push([...nums])
                return
            }

            for (let i = idx; i < n; i++) {
                [nums[idx], nums[i]] = [nums[i], nums[idx]];
                backtrack(nums, idx + 1);
                [nums[idx], nums[i]] = [nums[i], nums[idx]];
            }
        }
        backtrack(nums, 0)
        return res
    }
}
