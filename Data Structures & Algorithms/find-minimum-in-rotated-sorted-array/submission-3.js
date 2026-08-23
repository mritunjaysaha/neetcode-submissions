class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n = nums.length
        let min = Number.MAX_SAFE_INTEGER

        let left = 0
        let right = n - 1

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if (nums[left] <= nums[mid]) {
                min = Math.min(min, nums[left])

                left = mid + 1
            } else {
                min = Math.min(min, nums[mid])
                right = mid - 1
            }
        }

        return min
    }
}
