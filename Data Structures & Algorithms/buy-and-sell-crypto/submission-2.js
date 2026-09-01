class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;

        let maxP = 0;

        while (l < prices.length) {
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                maxP = Math.max(maxP, profit);
            } else {
                l = r;
            }
            r++;
        }

        return maxP;
    }
}
