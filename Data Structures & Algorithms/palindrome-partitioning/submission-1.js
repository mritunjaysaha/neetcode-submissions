class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = []
        const part = []

        const backtrack = (i) => {
            if (i >= s.length) {
                res.push([...part])

                return
            }

            for (let j = i; j < s.length; j++) {
                if (isPalindrome(i, j)) {
                    part.push(s.substring(i, j + 1))

                    backtrack(j + 1)

                    part.pop()
                }
            }
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

        backtrack(0)

        return res
    }
}
