/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0, right = num
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (mid * mid > num) right = mid - 1
        else if (mid * mid < num) left = mid + 1
        else return true
    }
    return num === 1
};