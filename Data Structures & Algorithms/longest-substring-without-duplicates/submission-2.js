class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const charSet = new Map()
        let l = 0
        let res = 0

        for (let r = 0; r < s.length; r++) {
            if (charSet.has(s[r])) {
                l = Math.max(charSet.get(s[r]) + 1, l)
            }

            charSet.set(s[r], r)
            res = Math.max(res, r - l + 1)
        }

        return res
    }
}
