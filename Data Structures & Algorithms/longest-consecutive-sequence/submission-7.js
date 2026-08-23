class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const st = new Set(nums);

        let streak = 0;

        for (const num of st) {
            if (!st.has(num - 1)) {
                let curr = num;
                let length = 1;

                while (st.has(curr + 1)) {
                    curr++
                    length++;
                }

                streak = Math.max(length, streak)
            }
        }

        return streak
    }
}
