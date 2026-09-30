class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlnum = (char) => {
            return (
                (char >= "a" && char <= "z") ||
                (char >= "A" && char <= "Z") ||
                (char >= "0" && char <= "9")
            );
        };

        let newStr = "";

        for (let c of s) {
            if (isAlnum(c)) {
                newStr += c.toLowerCase();
            }
        }

        return newStr === newStr.split("").reverse().join("");
    }
}
