/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.replace(/\s+/g, ' ').trim()
    s = s.split(" ")
    return s[s.length - 1].length
};