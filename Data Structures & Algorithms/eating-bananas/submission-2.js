class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const canEat = (k) => {
            let total = 0;

            for (const p of piles) {
                total += Math.ceil(p / k);
            }

            return total <= h;
        };

        let low = 0;
        let high = Math.max(...piles);
        let res = high;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (canEat(mid)) {
                res = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return res;
    }
}
