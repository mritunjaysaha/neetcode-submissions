class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals, queries) {
        const res = Array(queries.length).fill(Number.MIN_SAFE_INTEGER)

        for (let q = 0; q < queries.length; q++) {
            const query = queries[q]
            let ans = -1

            for (let i = 0; i < intervals.length; i++) {
                const [start, end] = intervals[i]

                if (start <= query && query <= end) {
                    if (ans === -1 || (end - start + 1) < ans) {
                        ans = end - start + 1
                    }
                }
            }
            res[q] = ans === Number.MAX_SAFE_INTEGER ? -1 : ans
        }

        return res
    }
}
