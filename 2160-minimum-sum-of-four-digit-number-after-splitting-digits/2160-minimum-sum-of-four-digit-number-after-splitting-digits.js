/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let numArr = num.toString().split("").sort()
    let num1 = numArr[0] + numArr[2], num2 = numArr[1] + numArr[3]
    return parseInt(num1) + parseInt(num2)
};