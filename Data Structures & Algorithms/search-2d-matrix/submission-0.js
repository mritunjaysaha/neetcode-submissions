class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length
        const cols = matrix[0].length

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] === target) {
                    return true
                }
            }
        }

        return false
    }

    binarySearch(nums, target) {
        const n = nums.length

        let l = 0
        let r = n - 1

        while (l < r) {
            const mid = Math.floor((low + high) / 2)

            if (nums[mid] === target) {
                return true
            } else if (nums[mid] < target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return false
    }
}
