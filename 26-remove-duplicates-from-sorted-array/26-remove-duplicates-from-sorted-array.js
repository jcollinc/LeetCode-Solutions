/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates (nums) {
    if (nums.length === 0) return 0
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};