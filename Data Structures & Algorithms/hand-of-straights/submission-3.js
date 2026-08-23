class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        const n = hand.length

        if (n % groupSize !== 0) return false

        const count = {}

        for (const num of hand) {
            count[num] = (count[num] || 0) + 1
        }

        for (const num of hand) {
            let start = num

            while (count[start - 1] > 0) start--

            while (start <= num) {
                while (count[start] > 0) {
                    for (let i = start; i < start + groupSize; i++) {
                        if (!count[i]) return false

                        count[i] -= 1
                    }
                }

                start++
            }
        }
        return true
    }

}
