class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length
        const COLS = grid[0].length

        const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        const visited = new Set()

        const bfs = (r, c) => {
            const queue = []
            queue.push([r, c])

            let res = 1
            grid[r][c] = 0

            while (queue.length > 0) {
                const [row, col] = queue.shift()

                for (const [dr, dc] of directions) {
                    const nr = row + dr
                    const nc = col + dc

                    if (
                        nr >= 0 && nr < ROWS &&
                        nc >= 0 && nc < COLS &&
                        grid[nr][nc] === 1
                    ) {
                        res++
                        grid[nr][nc] = 0
                        queue.push([nr, nc])
                    }
                }
            }

            return res
        }

        let area = 0
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    area = Math.max(area, bfs(r, c))
                }
            }
        }

        return area
    }
}
