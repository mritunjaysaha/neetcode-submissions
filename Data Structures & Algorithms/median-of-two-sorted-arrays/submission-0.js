class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const n1 = nums1.length
        const n2 = nums2.length

        const merged = []

        let i = 0
        let j = 0

        while (i < n1 && j < n2) {
            if (nums1[i] < nums2[j]) {
                merged.push(nums1[i++])
            } else {
                merged.push(nums2[j++])
            }
        }

        while (i < n1) merged.push(nums1[i++])
        while (j < n2) merged.push(nums2[j++])

        const mid = Math.floor(merged.length / 2)

        if (merged.length % 2 === 0) {
            return (merged[mid - 1] + merged[mid]) / 2
        } else {
            return merged[mid]
        }
    }
}
