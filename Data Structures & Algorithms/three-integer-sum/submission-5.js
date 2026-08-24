class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length;
        const res = [];

        /**
         * Sort the input array.
         * It lets us skip duplicates
         * It ensures that moving the left
         * pointer will increase or decrease
         * the sum in a predictable way
         */
        nums.sort((a, b) => a - b);

        for (let i = 0; i < n; i++) {
            if (nums[i] > 0) break;

            // skip duplicates for i loop
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // Initialize left and right pointers
            let l = i + 1;
            let r = n - 1;

            // Iterate until left and right pointers meet
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];

                // If sum is very large, decrement right pointer
                if (sum > 0) {
                    r--;
                }
                // If sum is too small, increment left pointer
                else if (sum < 0) {
                    l++;
                }
                // Sum is exactly 0
                else {
                    res.push([nums[i], nums[l], nums[r]]);
                    // Move the pointers to search for another combination
                    l++;
                    r--;

                    // Move past all duplicates
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }

        return res;
    }
}
