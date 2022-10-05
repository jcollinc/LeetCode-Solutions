/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 1) return x
    else {
        for (let i = 0; i < x; i++) {
            if (i*i <= x && (i+1) * (i+1) > x) return i
        }
    }
};