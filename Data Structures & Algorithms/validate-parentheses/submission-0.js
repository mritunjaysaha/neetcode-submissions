class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [s[0]]

        const getTop = () => {
            const n = stack.length

            return n > 0 ? stack[n - 1] : ""
        }

        for (let i = 1; i < s.length; i++) {
            const top = getTop()
            const c = s[i]
            console.log({ c })
            if ((top === "(" && c === ")") || (top === "{" && c === "}") || (top === "[" && c === "]")) {
                stack.pop()
            } else {
                stack.push(c)
            }
        }

        console.log(stack)

        if (stack.length > 0) {
            return false
        }

        return true
    }
}
