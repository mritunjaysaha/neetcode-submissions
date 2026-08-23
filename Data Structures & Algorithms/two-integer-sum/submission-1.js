class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i === j) continue;

                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }

        return [-1, -1];
    }
}
