class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length;
        const count = new Map();
        const res = [];

        // sort input array
        nums.sort((a, b) => a - b);

        // create the frequency map
        for (let num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        for (let i = 0; i < n; i++) {
            // decrement frequency
            count.set(nums[i], count.get(nums[i]) - 1);

            // skip duplicates
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            for (let j = i + 1; j < n; j++) {
                // decrement frequency
                count.set(nums[j], count.get(nums[j]) - 1);

                // skip duplicates
                if (j > i + 1 && nums[j] === nums[j - 1]) continue;

                // target i + j + k = 0 => k = -(i+j)
                const target = -(nums[i] + nums[j]);

                if (count.get(target) > 0) {
                    res.push([nums[i], nums[j], target]);
                }
            }

            // restore frequency of j loop
            for (let j = i + 1; j < n; j++) {
                count.set(nums[j], count.get(nums[j]) + 1);
            }
        }

        return res;
    }
}
