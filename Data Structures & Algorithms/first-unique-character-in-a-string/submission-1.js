class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        const countMap = new Map();

        for (const c of s) {
            countMap.set(c, (countMap.get(c) || 0) + 1);
        }

        for (let i = 0; i < s.length; i++) {
            if (countMap.get(s[i]) === 1) {
                return i;
            }
        }

        return -1;
    }
}
