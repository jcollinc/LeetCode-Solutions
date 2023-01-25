/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let positive = true, started = false, res = ""
    for (let char of s) {
        if (!started) {
            if (char === " ") continue
            else if (char === "-") {
                positive = false
                started = true
                continue   
            } else if (char === "+") {
                started = true
                continue
            }
            else if (!isNaN(char)) started = true
            else if (isNaN(char)) return 0
        } 
        if (started) {
            if (!isNaN(char) && char !== " ") res += char
            else break
        }
    }
    if (!res.length) return 0
    res = parseInt(res) 
    if (!positive) res = res * -1
    if (res > 2**31 - 1) return 2**31 - 1
    else if (res < -(2**31)) return -(2**31)
    return res
};