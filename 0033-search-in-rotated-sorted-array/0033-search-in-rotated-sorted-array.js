/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length, pivot = 0;
    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[i - 1]) {
            pivot = i;
            break;
        }
    }
    let left = 0, right = n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midValue = nums[(mid + pivot) % n]; 
        
        if (midValue === target) {
            return (mid + pivot) % n;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; 
};
