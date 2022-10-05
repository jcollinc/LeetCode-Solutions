/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x
    else {
        let left = parseInt((Math.E **(.5 * Math.log(x))))
        let right = left + 1
        return right * right > x ? left : right
    }
};