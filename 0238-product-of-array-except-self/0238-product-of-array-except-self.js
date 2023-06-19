/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = [];
  let product = 1, n = nums.length

  for (let i = 0; i < n; i++) {
    res.push(product);
    product *= nums[i];
  }

  product = 1;

  for (let j = n - 1; j >= 0; j--) {
    res[j] *= product;
    product *= nums[j];
  }

  return res;
};