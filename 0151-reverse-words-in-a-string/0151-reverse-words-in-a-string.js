/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(" ").reverse().filter(char => char)
    return s.join(" ")
};