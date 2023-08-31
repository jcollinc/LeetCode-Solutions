/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumReplacement(nums) {
    let n = nums.length;
    let prev = nums[n - 1];
    let ans = 0;

    for (let i = n - 2; i >= 0; i--) {
        let noOfTime = Math.floor(nums[i] / prev);
        
        if (nums[i] % prev !== 0) {
            noOfTime++;
            prev = Math.floor(nums[i] / noOfTime);
        }
        
        ans += noOfTime - 1;
    }
    
    return ans;
}
