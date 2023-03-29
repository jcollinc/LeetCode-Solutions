/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let counts = new Map(), output = 0
    for (let num of nums) {
        counts.set(num, 1 + (counts.get(num) || 0))
    }
    for (let [num, count] of counts) {
        let temp = count - 1
        while (temp > 0) {
            output += temp
            temp--
        }
    }
    return output
};