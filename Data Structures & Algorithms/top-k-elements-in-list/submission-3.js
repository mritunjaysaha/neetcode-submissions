class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map()
        const bucket = []
        const result = []

        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1)
        }

        for (const [num, freq] of freqMap) {
            bucket[freq] = (bucket[freq] || new Set()).add(num)
        }

        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i]) result.push(...bucket[i])
            if (result.length === k) break
        }

        return result
    }
}
