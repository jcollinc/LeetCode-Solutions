/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let min = 0, res = 0
    for (let char of customers) {
        if (char === "Y") min++
    }
    let curr = min
    for (let i = 1; i <= customers.length; i++) {
        customers[i-1] === "Y" ? curr-- : curr++
        if (curr < min) {
            min = curr
            res = i
        }
    }
    return res
};