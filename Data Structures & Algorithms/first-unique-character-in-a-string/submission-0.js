class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        const n = s.length;

        for (let i = 0; i < n; i++) {
            let flag = true;

            for (let j = 0; j < n; j++) {
                if (i !== j && s[i] === s[j]) {
                    flag = false;
                    break;
                }
            }

            if (flag) return i;
        }

        return -1;
    }
}
