class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const n = s.length

        let res = 0

        for (let i = 0; i < n; i++) {
            for (let j = i; j < s.length; j++) {
                let l = i
                let r = j

                while (l < r && s[l] === s[r]) {
                    l++
                    r--
                }

                if (l >= r) {
                    res++
                }
            }
        }

        return res
    }
}
