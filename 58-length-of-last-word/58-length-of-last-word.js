/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.replace(/\s+/g, ' ').trim().split(" ").pop().length
};