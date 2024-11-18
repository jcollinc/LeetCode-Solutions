/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let n = code.length, decrypt = new Array(n)
    if (k == 0) return decrypt.fill(0)
    for (let i = 0; i < code.length; i++) {
        let count = k, idx = i, curr = 0
        if (k > 0) {
            while (count > 0) {
                curr += code[(idx+1) % n]
                count--, idx++
            }
            decrypt[i] = curr
        } else if (k < 0) {
            while (count < 0) {
                curr += code[(idx-1+n) % n]
                count++, idx--
            }
        } 
        decrypt[i] = curr
    }
    return decrypt
};