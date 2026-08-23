class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length
        const ans = []

        for (let i = 0; i < n; i++) {
            const hashSet = new Set()

            for (let j = i + 1; j < n; j++) {
                const third = - (nums[i] + nums[j])

                if (hashSet.has(third)) {
                    const temp = [nums[i], nums[j], third]

                    temp.sort((a, b) => a - b)

                    ans.push(temp)
                }

                hashSet.add(nums[j])
            }
        }

        const set = new Set(ans.map(JSON.stringify))

        return Array.from(set).map(JSON.parse)
    }
}
