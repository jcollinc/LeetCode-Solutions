/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    var start1 = 0;
    var start2 = 0;
    while(start1 < nums1.length && start2 < nums2.length)
    {
        if(nums1[start1] === nums2[start2])
        {
            return nums1[start1];
        }
        else if(nums1[start1] < nums2[start2])
        {
            start1 += 1;
        }
        else
        {
            start2 += 1;
        }
    }
    return -1;
};