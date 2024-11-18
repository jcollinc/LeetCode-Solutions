/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let n = code.length, decrypt = []
    
    if (k == 0) return new Array(n).fill(0)
    
    if (k > 0) {
        let count = k, idx = 0, sum = 0
        while (count > 0) {
            sum += code[(idx+1) % n]
            count--, idx++
        }
        decrypt.push(sum)
        for (let p1 = 1, p2 = k; p1 != 0; p1 = (p1+1) % n, p2++) {
            sum = (sum - code[p1] + code[(p2+1) % n])
            decrypt.push(sum)
        }
    }
    
    else if (k < 0) {
        let count = k, idx = 0, sum = 0
        while (count < 0) {
            sum += code[(idx-1+n) % n]
            count++, idx--
        }
        decrypt.push(sum)
        for (let p1 = n+k, p2 = 0; p1 != n+k-1; p1 = (p1+1) % n, p2 = (p2+1) % n) {
            sum = (sum - code[p1] + code[p2])
            decrypt.push(sum)
        }
    }
    return decrypt
};