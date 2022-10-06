/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let res = []
    let one = [...nums1]
    let two = [...nums2]
    if (one.length && two.length && one.reduce((a, b) => a+b) === 0 && two.reduce((a,b) => a + b) === 0) return 0
    let mid = parseInt((one.length+two.length) / 2)
    if (mid === 0) return nums1.length ? nums1[0] : nums2[0]
    if (!nums1.length) return nums2.length % 2 !== 0 ? nums2[Math.floor(nums2.length / 2)] : (nums2[nums2.length / 2] + nums2[Math.floor(nums2.length / 2) - 1]) / 2
    if (!nums2.length) return nums1.length % 2 !== 0 ? nums1[Math.floor(nums1.length / 2)] : (nums1[nums1.length / 2] + nums1[(nums1.length / 2) - 1]) / 2
    for (let i = 0; i <= mid; i++) {
        if (res[i]) continue
        else {
            if (nums1[i] && (nums2[i] !== 0 && !nums2[i] || nums1[i] <= nums2[i])) {
                res[i] = nums1[i]
                nums2.unshift(0)
            }
            else {
                res[i] = nums2[i]
                nums1.unshift(0)
            }
        }
    }
    return (one.length+two.length) % 2 === 0 ? (res[res.length-1] + res[res.length-2]) / 2.0 : res[res.length-1]
};