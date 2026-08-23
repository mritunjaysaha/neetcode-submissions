class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length
        const COLS = heights[0].length

        const pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false))
        const atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false))

        const dfs = (r, c, ocean) => {
            ocean[r][c] = true

            const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

            for (const [dr, dc] of directions) {
                const nr = r + dr
                const nc = c + dc

                if (
                    nr >= 0 && nr < ROWS &&
                    nc >= 0 && nc < COLS &&
                    !ocean[nr][nc] && heights[nr][nc] >= heights[r][c]
                ) {
                    dfs(nr, nc, ocean)
                }
            }
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pac)
            dfs(ROWS - 1, c, atl)
        }

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pac)
            dfs(r, COLS - 1, atl)
        }

        const res = []

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pac[r][c] && atl[r][c]) {
                    res.push([r, c])
                }
            }
        }

        return res
    }
}
