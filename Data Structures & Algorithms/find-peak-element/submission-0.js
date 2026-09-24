class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        let low = 0;
        let high = nums.length - 1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (mid > 0 && nums[mid] < nums[mid - 1]) {
                high = mid - 1;
            } else if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
                low = mid + 1;
            } else {
                return mid;
            }
        }
    }
}
