/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[digits.length - 1] !== 9) {
        digits[digits.length - 1] ++
        return digits
    }
    else {
        for (let i = digits.length - 1; i >= 0; i--) {
            while (digits[i] === 9) {
                digits[i] = 0
                i--
            }
            i < 0 ? digits.unshift(1) : digits[i]++ 
            break
        }
    }
    return digits
};