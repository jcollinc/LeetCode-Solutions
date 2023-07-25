/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
let max = Math.max(...nums);
    let min = Math.min(...nums)
    if(k===1)return max
    let sorted = new Array(Math.abs(min)+Math.abs(max)+1).fill(0);
    for(let i=0;i<nums.length;i++){
        let num=nums[i];
        if(num>sorted.length)continue;
        let val = sorted[Math.abs(min)+num];
        sorted[Math.abs(min)+num]=val+1
    }
    let int
    let x=k
for(let i=sorted.length-1;i>=0;i--){
      x -= sorted[i];
      if(x<=0)return i-Math.abs(min)
  }
return max
};