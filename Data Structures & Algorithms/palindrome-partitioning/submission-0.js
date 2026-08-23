class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = []
        const part = []

        const backtrack = (j, i) => {
            if (i >= s.length) {
                if (i === j) {
                    res.push([...part])
                }

                return
            }

            if (isPalindrome(j, i)) {
                part.push(s.substring(j, i + 1))

                backtrack(i + 1, i + 1)

                part.pop()
            }

            backtrack(j, i + 1)
        }


        const isPalindrome = (l, r) => {
            while (l < r) {
                if (s[l] !== s[r]) {
                    return false
                }

                l++
                r--
            }

            return true
        }

        backtrack(0, 0)

        return res
    }
}
