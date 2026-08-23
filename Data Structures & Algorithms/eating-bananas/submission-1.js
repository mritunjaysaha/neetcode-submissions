class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const n = piles.length
        let left = 1
        let right = Math.max(...piles)

        let res = right

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            let totalTime = 0
            for (const p of piles) {
                totalTime += Math.ceil(p / mid)
            }

            if (totalTime <= h) {
                res = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return res
    }
}
