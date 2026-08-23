class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = []

        for (const interval of intervals) {
            if (newInterval === null || interval[1] < newInterval[0]) {
                res.push(interval)
            } else if (newInterval[1] >= interval[0]) {
                newInterval[0] = Math.min(newInterval[0], interval[0])
                newInterval[1] = Math.max(newInterval[1], interval[1])
            } else if (interval[0] > newInterval[1]) {
                res.push(newInterval)
                res.push(interval)

                newInterval = null
            }
        }

        if (newInterval !== null) {
            res.push(newInterval)
        }

        return res
    }
}
