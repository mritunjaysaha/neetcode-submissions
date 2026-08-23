class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = []
        nums.sort((a, b) => a - b)

        const dfs = (i, curr, total) => {
            if (total === target) {
                res.push([...curr])
                return
            }

            for (let j = i; j < nums.length; j++) {
                if (total + nums[j] > target) {
                    return
                }

                curr.push(nums[j])
                dfs(j, curr, total + nums[j])
                curr.pop()
            }
        }

        dfs(0, [], 0)
        return res
    }
}
