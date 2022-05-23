/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = ''
    let control = strs[0]
    let index = 0
    
    for (let testLetter of control) {
        for (let i = 1; i < strs.length; i++) {
            let word = strs[i];
            let letter = word.charAt(index)
            
            if (testLetter !== letter || index > word.length) {
                return res
            }
        }
        index++
        res += testLetter
    }
    return res
};

