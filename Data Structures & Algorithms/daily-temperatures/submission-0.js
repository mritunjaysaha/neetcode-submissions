class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length
        const res = Array(n).fill(0)

        for (let i = 0; i < n; i++) {
            const curr = temperatures[i]
            let c = 1
            let j = i + 1

            while (j < n) {
                if (temperatures[j] > curr) {
                    break
                }
                j++
                c++
            }

            c = (j === n) ? 0 : c
            res[i] = c
        }

        return res
    }
}
