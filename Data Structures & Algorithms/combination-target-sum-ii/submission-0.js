class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = []

        candidates.sort((a, b) => a - b)

        const dfs = (idx, path, curr) => {
            if (curr === target) {
                res.push([...path])
                return
            }

            for (let i = idx; i < candidates.length; i++) {
                if (i > idx && candidates[i] === candidates[i - 1]) {
                    continue
                }

                if (curr + candidates[i] > target) {
                    break
                }

                path.push(candidates[i])

                dfs(i + 1, path, curr + candidates[i])

                path.pop()
            }
        }

        dfs(0, [], 0)

        return res
    }
}
