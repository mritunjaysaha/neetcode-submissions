class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const n = nums.length
        const res = []

        nums.sort((a, b) => a - b)

        const backtrack = (idx, subset) => {
            if (idx >= n) {
                res.push([...subset])
                return
            }

            for (let i = idx; i < n; i++) {
                if (i > idx && nums[i] === nums[i - 1]) continue

                subset.push(nums[i])
                backtrack(i + 1, subset)

                subset.pop()
                backtrack(i + 1, subset)
            }
        }

        backtrack(0, [])
        const st = new Set(res.map((trip) => JSON.stringify(trip)))

        return Array.from(st).map((trip) => JSON.parse(trip))
    }
}
