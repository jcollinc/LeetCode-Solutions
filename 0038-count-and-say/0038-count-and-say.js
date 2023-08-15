/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let curr = '1'
    for (let i = 1; i < n; i++) {
        curr = convertToStr(curr)
    }
    return curr
};

function convertToStr (str) {
    let idx = 0, nextConversion = ""
    while (idx < str.length) {
        let count = 0, curr = str[idx]
        while (idx < str.length && str[idx] === curr) {
            idx++, count++
        }
        nextConversion = nextConversion + count + curr
    }
    return nextConversion 
}