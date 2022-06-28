/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArr = s.split(" ")
    let last = ""
    for (val of sArr) {
        if (val.length > 0) last = val
    }
    return last.length
};