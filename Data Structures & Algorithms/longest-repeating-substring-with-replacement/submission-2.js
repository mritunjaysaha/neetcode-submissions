class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const n = s.length

        let res = 0

        for (let i = 0; i < n; i++) {
            const count = new Map()
            let maxf = 0

            for (let j = i; j < n; j++) {
                count.set(s[j], (count.get(s[j]) || 0) + 1)
                maxf = Math.max(maxf, count.get(s[j]))

                if ((j - i + 1) - maxf <= k) {
                    res = Math.max(res, j - i + 1)
                }
            }
        }

        return res
    }
}
