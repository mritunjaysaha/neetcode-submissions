class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        if (n <= 2) {
            return n === 0 ? 0 : 1;
        }

        const dp = new Array(n + 1).fill(0);
        dp[1] = dp[2] = 1;

        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
        }

        return dp[n];
    }
}
