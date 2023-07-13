/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 1) return x
    let left = 1, right = x
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (mid * mid <= x && (mid + 1) * (mid + 1) > x) return mid 
        else if (mid * mid > x) right = mid
        else left = mid + 1
    }
    return left
};