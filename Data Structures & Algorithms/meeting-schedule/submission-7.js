/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const n = intervals.length

        if (n === 0) return true

        intervals.sort((a, b) => a.start - b.start)

        for (let i = 1; i < n; i++) {
            const { start } = intervals[i]

            if (start < intervals[i - 1].end) {
                return false
            }
        }

        return true
    }
}
