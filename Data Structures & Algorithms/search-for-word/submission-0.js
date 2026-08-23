class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const n = word.length
        const ROWS = board.length
        const COLS = board[0].length

        const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false))

        const backtrack = (r, c, i) => {
            if (i === n) return true

            if (
                r < 0 || r >= ROWS ||
                c < 0 || c >= COLS ||
                board[r][c] !== word[i] ||
                visited[r][c]
            ) {
                return false
            }

            visited[r][c] = true

            const res = backtrack(r + 1, c, i + 1) ||
                backtrack(r - 1, c, i + 1) ||
                backtrack(r, c + 1, i + 1) ||
                backtrack(r, c - 1, i + 1)

            visited[r][c] = false

            return res
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (backtrack(r, c, 0)) return true
            }
        }

        return false
    }
}
