/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let numStr = num.toString()
    while (numStr.length > 1) {
        let curr = 0
        for (let num of numStr) {
            curr += parseInt(num)
        }
        numStr = curr.toString()
    }
    return numStr
};