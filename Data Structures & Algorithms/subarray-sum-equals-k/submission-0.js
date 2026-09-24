class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
        let total = 0;

        const mpp = new Map();
        mpp.set(0, 1);

        for (let i = 0; i < nums.length; i++) {
            total += nums[i];
            const x = total - k;

            if (mpp.has(x)) {
                count += mpp.get(x);
            }

            mpp.set(total, (mpp.get(total) || 0) + 1);
        }

        return count;
    }
}
