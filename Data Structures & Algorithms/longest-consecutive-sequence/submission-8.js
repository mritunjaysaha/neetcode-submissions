class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const n = nums.length;

        if (n === 0) return 0;

        let streak = 1;
        let maxStreak = 1;

        nums.sort((a, b) => a - b);

        for (let i = 1; i < n; i++) {
            if (nums[i - 1] === nums[i]) continue;

            if (nums[i - 1] + 1 === nums[i]) {
                streak++;
                maxStreak = Math.max(maxStreak, streak);
            } else {
                streak = 1;
            }
        }

        return maxStreak
    }
}
