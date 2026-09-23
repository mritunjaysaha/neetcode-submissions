class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights);
        let r = weights.reduce((a, b) => a + b, 0);
        let res = r;

        const canShip = (cap) => {
            let ships = 1;
            let currCap = cap;

            for (const w of weights) {
                if (currCap - w < 0) {
                    ships++;

                    if (ships > days) {
                        return false;
                    }

                    currCap = cap;
                }
                currCap -= w;
            }

            return true;
        };

        while (l <= r) {
            const cap = Math.floor((l + r) / 2);

            if (canShip(cap)) {
                res = Math.min(res, cap);
                r = cap - 1;
            } else {
                l = cap + 1;
            }
        }

        return res;
    }
}
