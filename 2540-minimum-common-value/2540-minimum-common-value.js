/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let p1 = 0, p2 = 0
    while (p1 < nums1.length && p2 < nums2.length) {
        let m = nums1[p1], n = nums2[p2]
        if (m == n) return m
        else m < n ? p1++ : p2++
    }
    return -1
};