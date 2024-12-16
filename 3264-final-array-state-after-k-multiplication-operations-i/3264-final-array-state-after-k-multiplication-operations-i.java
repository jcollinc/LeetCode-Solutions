class Solution {
    public int[] getFinalState(int[] nums, int k, int multiplier) {
        while(k!=0){
            int[] res = helper(nums);
            int min = res[0];
            int mi = res[1];
            min *= multiplier;
            nums[mi] = min;
            k--;
        }
        return nums;
    }
    public int[] helper(int[] nums){
        int n = nums.length;
        int min = nums[0],mi = 0;
        for(int i=1;i<n;i++){
            if(min > nums[i]){
                min = nums[i];
                mi = i;
            }
        }
        int[] arr = {min,mi};
        return arr;
    }
}