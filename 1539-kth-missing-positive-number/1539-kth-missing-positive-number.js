/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let numSet = new Set(), arrSet = new Set()
    for (let i = 1; i <= arr[arr.length-1]; i++) {
        numSet.add(i)
    }
    for (let num of arr) {
        arrSet.add(num)
    }
    console.log(numSet, arrSet)
    for (let num of numSet) {
        if (!arrSet.has(num)) k--
        if (k === 0) return num
    }
    
    let curr = arr[arr.length-1]
    while (k > 0) {
        curr++
        k--
    }
    return curr
};