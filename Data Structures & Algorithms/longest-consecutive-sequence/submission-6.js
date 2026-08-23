class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const n = nums.length;

        if (n === 0) {
            return 0;
        }

        nums.sort((a, b) => a - b);

        console.log(nums);

        let streak = 1;
        let res = 1;

        for (let i = 1; i < n; i++) {
            if (nums[i - 1] === nums[i]) {
                console.log("continue", i);
                continue;
            }

            if (nums[i - 1] + 1 === nums[i]) {
                streak++;
                res = Math.max(res, streak);
            } else {
                streak = 1;
            }
        }

        return res;
    }
}
