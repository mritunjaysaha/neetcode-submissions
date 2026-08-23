class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;

        const indices = {};

        for (let i = 0; i < n; i++) {
            indices[nums[i]] = i;
        }

        for (let i = 0; i < n; i++) {
            const diff = target - nums[i]

            if(indices[diff] !== undefined && indices[diff] !== i){
                return [i , indices[diff]]
            }
        }

        return
    }
}
