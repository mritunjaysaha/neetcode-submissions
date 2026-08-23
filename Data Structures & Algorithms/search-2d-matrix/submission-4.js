class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length
        const COLS = matrix[0].length

        let l = 0
        let r = ROWS * COLS - 1

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)
            const row = Math.floor(mid / COLS)
            const col = mid % COLS

            if (target > matrix[row][col]) {
                l = mid + 1
            } else if (target < matrix[row][col]) {
                r = mid - 1
            } else {
                return true
            }
        }

        return false
    }
}
