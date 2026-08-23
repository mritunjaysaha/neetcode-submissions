class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlnum = (c) => {
            return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= '0' && c <= "9")
        }

        let str = ""

        for (let c of s) {
            if (isAlnum(c)) {
                str += c.toLowerCase()
            }
        }

        return str === str.split("").reverse().join("")
    }
}
