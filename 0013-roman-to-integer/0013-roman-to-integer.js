/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let dict = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
    let conversion = 0
    for (let i = 0; i < s.length; i++) {
        if (dict[s[i]] < dict[s[i+1]]) conversion -= dict[s[i]]
        else conversion += dict[s[i]]
    }
    return conversion
};