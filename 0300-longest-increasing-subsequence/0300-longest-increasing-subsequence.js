/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let tails = []
    let size = 0
    for (let num of nums) {
        let left = 0, right = size
        while (left !== right) {
            let mid = Math.floor((left + right) / 2)
            tails[mid] < num ? left = mid + 1 : right = mid
        }
        tails[left] = num
        if (left === size) size++
    }
    return size
};

