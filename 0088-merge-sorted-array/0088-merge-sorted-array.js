/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (!nums1.length || !nums2.length) return nums1.length ? nums1 : nums2
    let allNums = new Map()
    let p1 = 0, p2 = 0
    for (let i = 0; i < m + n; i++) {
        if (p1 >= m || (p2 < n && nums2[p2] < nums1[p1])) {
            allNums.set(i, nums2[p2])
            p2++
        } else  {
            allNums.set(i, nums1[p1])
            p1++
        }
    }
    for (let [key, value] of allNums) {
        nums1[key] = value
    }
    return nums1
};