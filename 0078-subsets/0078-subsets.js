/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
	const powerset = [];
	
	function generatePowerset(path, index) {
		powerset.push(path);
		for (let i = index; i < nums.length; i++) {
			generatePowerset([...path, nums[i]], i + 1);
		}
	}
    
    generatePowerset([], 0);

	return powerset;
}