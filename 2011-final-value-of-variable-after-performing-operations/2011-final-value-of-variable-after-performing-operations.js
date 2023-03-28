/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let val = 0, addSet = new Set(["X++", "++X"])
    for (let op of operations) {
        addSet.has(op) ? val++ : val--
    }
    return val
};