class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const n = board.length;

        const cols = new Map()
        const rows = new Map()
        const squares = new Map()

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                const currentCell = board[r][c]

                if (currentCell === ".") {
                    continue
                }

                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`

                if ((rows.get(r) && rows.get(r).has(currentCell)) ||
                    (cols.get(c) && cols.get(c).has(currentCell)) ||
                    (squares.get(squareKey) &&
                        squares.get(squareKey).has(currentCell)
                    )
                ) {
                    return false
                }

                if (!rows.has(r)) {
                    rows.set(r, new Set())
                }

                if (!cols.has(c)) {
                    cols.set(c, new Set())
                }

                if (!squares.has(squareKey)) {
                    squares.set(squareKey, new Set())
                }

                rows.get(r).add(currentCell)
                cols.get(c).add(currentCell)
                squares.get(squareKey).add(currentCell)
            }
        }

        return true;
    }
}
