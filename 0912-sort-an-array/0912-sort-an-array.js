/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function(nums) {
    if (nums.length < 2) return nums
    let mid = Math.floor(nums.length / 2)
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)
    return merge(sortArray(left), sortArray(right))
}

const merge = (left, right) => {
    let sorted = [], [l,r] = [0,0]
    while (l < left.length && r < right.length) {
        sorted.push(left[l] < right[r] ? left[l++] : right[r++])
    }
    return [...sorted, ...left.slice(l), ...right.slice(r)]
}

