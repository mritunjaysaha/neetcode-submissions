class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n1 = s1.length
        const n2 = s2.length

        if (n1 > n2) return false

        const s1Count = new Array(26).fill(0)
        const s2Count = new Array(26).fill(0)

        for (let i = 0; i < n1; i++) {
            s1Count[s1.charCodeAt(i) - 97]++
            s2Count[s2.charCodeAt(i) - 97]++
        }

        let matches = 0

        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++
            }
        }

        let l = 0

        for (let r = n1; r < n2; r++) {
            if (matches === 26) {
                return true
            }

            let index = s2.charCodeAt(r) - 97

            s2Count[index]++

            if (s1Count[index] === s2Count[index]) {
                matches++
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches--
            }

            index = s2.charCodeAt(l) - 97
            s2Count[index]--

            if (s1Count[index] === s2Count[index]) {
                matches++
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--
            }

            l++
        }

        return matches === 26
    }
}
