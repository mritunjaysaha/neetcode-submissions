class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let prev1 = 0;
        let prev2 = 0;

        for (const money of nums) {
            const current = Math.max(prev1, money + prev2);

            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}
