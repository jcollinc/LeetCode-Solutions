/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let numSet = new Set()
    for (let num of arr) {
        numSet.add(num)
    }
    let curr = 1
    while (k > 0) {
        if (!numSet.has(curr)) k--
        if (k > 0) curr++
    }
    return curr
};