class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length
        const COLS = board[0].length

        const dfs = (r, c) => {
            if (
                r < 0 || r >= ROWS ||
                c < 0 || c >= COLS ||
                board[r][c] !== "O"
            ) {
                return
            }

            board[r][c] = "Y"

            dfs(r, c - 1)
            dfs(r, c + 1)
            dfs(r + 1, c)
            dfs(r - 1, c)
        }

        for (let i = 0; i < COLS; i++) {
            dfs(0, i)
            dfs(ROWS - 1, i)
        }

        for (let j = 0; j < ROWS; j++) {
            dfs(j, 0)
            dfs(j, COLS - 1)
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === "O") {
                    board[r][c] = "X"
                } else if (board[r][c] === "Y") {
                    board[r][c] = "O"
                }
            }
        }
    }
}
