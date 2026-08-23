class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const n = s.length
        let res = 0

        for (let i = 0; i < n; i++) {
            const charSet = new Set()

            for (let j = i; j < n; j++) {
                if (charSet.has(s[j])) {
                    break
                }

                charSet.add(s[j])
            }

            res = Math.max(res, charSet.size)
        }

        return res
    }
}
