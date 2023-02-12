/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    if (arr.length <= 1) return true
    let counts = new Map(), check = new Set()
    for (let num of arr) {
        counts.set(num, 1 + (counts.get(num) || 0))
    }
    for (let [num, count] of counts) {
        if (check.has(count)) return false
        check.add(count)
    }
    return true
};