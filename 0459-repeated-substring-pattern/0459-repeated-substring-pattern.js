/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    var t = s + s;
    if (t.substring(1, t.length - 1).includes(s)) {
        return true;
    }
    return false;
};
