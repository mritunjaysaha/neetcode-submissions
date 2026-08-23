class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length
        const res = Array(n).fill(0)
        const stack = []

        for (let i = 0; i < n; i++) {
            const t = temperatures[i]

            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                const [stackT, stackInd] = stack.pop()
                res[stackInd] = i - stackInd
            }
            stack.push([t, i])
        }

        return res
    }
}
