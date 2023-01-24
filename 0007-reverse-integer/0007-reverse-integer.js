/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let newVal = parseInt(x.toString().split("").reverse().join(""))
    if (x < 0) newVal *= -1
    return withinBounds(newVal) ? newVal : 0
};

function withinBounds (val) {
    return val > -(2**31) && val < (2**31) - 1 
}