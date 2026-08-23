class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const countT = {}

        for (const c of t) {
            countT[c] = (countT[c] || 0) + 1
        }

        let res = [-1, -1]
        let resLen = Infinity

        for (let i = 0; i < s.length; i++) {
            let countS = {}

            for (let j = i; j < s.length; j++) {
                countS[s[j]] = (countS[s[j]] || 0) + 1

                let flag = true
                for (const c in countT) {
                    if ((countS[c] || 0) < countT[c]) {
                        flag = false
                        break
                    }
                }

                if (flag && (j - i + 1) < resLen) {
                    resLen = j - i + 1
                    res = [i, j]
                }
            }
        }

        return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1)
    }
}
