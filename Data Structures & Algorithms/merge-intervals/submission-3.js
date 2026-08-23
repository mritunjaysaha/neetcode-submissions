class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0])

        const output = []
        output.push(intervals[0])

        for (let interval of intervals) {
            const [start, end] = interval

            const lastEnd = output[output.length - 1][1]

            if (start <= lastEnd) {
                output[output.length - 1][1] = Math.max(lastEnd, end)
            } else {
                output.push([start, end])
            }
        }

        return output
    }
}
