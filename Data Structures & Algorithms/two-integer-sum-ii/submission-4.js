class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n = numbers.length

        let l = 0
        let r = n - 1

        while (l < r) {
            const currSum = numbers[l] + numbers[r]

            if (currSum > target) {
                r--
            } else if (currSum < target) {
                l++
            } else {
                return [l + 1, r + 1]
            }
        }

        return []
    }
}
