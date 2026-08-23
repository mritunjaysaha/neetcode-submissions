class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const n = board.length;

        const checkRows = (row) => {
            const set = new Set();
            // console.log("row: ", row);
            for (let i = 0; i < n; i++) {
                const current = board[row][i];

                if (current === ".") {
                    continue;
                } else {
                    if (set.has(current)) {
                        return false;
                    } else {
                        set.add(current);
                    }
                }
            }
            // console.log("row: " + row, set);
            return true;
        };

        const checkCols = (col) => {
            const set = new Set();
            // console.log("col: ", col);

            for (let i = 0; i < n; i++) {
                const current = board[i][col];

                if (current === ".") {
                    continue;
                } else {
                    if (set.has(current)) {
                        return false;
                    } else {
                        set.add(current);
                    }
                }
            }
            // console.log("col: " + col, set);
            return true;
        };


        const checkSquare = (square) => {
            const set = new Set();

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const row = Math.floor(square / 3) * 3 + i;
                    const col = (square % 3) * 3 + j;

                    const current = board[row][col];

                    console.log({ row, col, current });

                    if (current === ".") {
                        continue;
                    }

                    if (set.has(current)) {
                        return false;
                    }
                    set.add(current);
                }
            }
            console.log();
            // console.log("square: " + index, set);
            return true;
        };

        for (let i = 0; i < n; i++) {
            const row = checkRows(i);
            const col = checkCols(i);
            // console.log({ i, row, col });
            if (!row) {
                return false;
            }

            if (!col) {
                return false;
            }
        }

        for (let i = 0; i < n; i++) {
            const square = checkSquare(i);
            // console.log({ i, square });
            if (!square) {
                return false;
            }
        }

        return true;
    }
}
