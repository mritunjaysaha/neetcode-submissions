class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length
        const cols = grid[0].length

        const queue = []
        const visited = Array.from({ length: rows }, () => Array(cols).fill(false))


        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j])
                    visited[i][j] = true
                }
            }
        }
        let count = -1
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

        while (queue.length > 0) {
            const size = queue.length
            count++

            for (let i = 0; i < size; i++) {
                const [row, col] = queue.shift()

                for (const [dx, dy] of directions) {
                    const nx = row + dx
                    const ny = col + dy

                    if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && !visited[nx][ny] && grid[nx][ny]) {
                        visited[nx][ny] = true
                        grid[nx][ny] = 2
                        queue.push([nx, ny])
                    }
                }
            }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    return -1
                }
            }
        }

        return count === -1 ? 0 : count
    }
}
