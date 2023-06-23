/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let counts = new Map()
    for (let num of nums) {
        counts.set(num, 1 + (counts.get(num) || 0))
    }
    let countsArr = []
    
    for (let [num, count] of counts) {
        countsArr.push([num, count])
    }
    countsArr.sort((a,b) => b[1] - a[1])
    countsArr.length = k 
    return countsArr.map((a) => a[0])
};