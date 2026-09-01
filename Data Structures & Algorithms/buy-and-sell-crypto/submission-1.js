class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;

        const n = prices.length;

        for (let i = 0; i < n; i++) {
            let buy = prices[i];

            for (let j = i + 1; j < n; j++) {
                let sell = prices[j];
                res = Math.max(res, sell - buy);
            }
        }

        return res
    }
}
