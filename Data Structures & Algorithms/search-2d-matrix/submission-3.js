class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length
        const cols = matrix[0].length

        let top = 0
        let bottom = rows - 1

        while (top <= bottom) {
            const row = Math.floor((top + bottom) / 2)

            if (target > matrix[row][cols - 1]) {
                top = row + 1
            } else if (target < matrix[row][0]) {
                bottom = row - 1
            } else {
                break
            }
        }

        if (!(top <= bottom)) {
            return false
        }

        const row = Math.floor((top + bottom) / 2)
        let l = 0
        let r = cols - 1

        while (l <= r) {
            const mid = Math.floor((l + r) / 2)

            if (target > matrix[row][mid]) {
                l = mid + 1
            } else if (target < matrix[row][mid]) {
                r = mid - 1
            } else {
                return true
            }
        }

        return false
    }
}
