/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    if (s.length === 1) return 0
    let res = 0
    let counts = {}
    for (let char of s) {
        if (counts[char]) counts[char]++
        else counts[char] = 1
    }
    let countsArr = Object.values(counts)
    let unique = []
    while (countsArr.length ? countsArr.reduce((a, b) => a + b) > 0 : countsArr.length) {
        for (let i = countsArr.length - 1; i >= 0; i--) {
            if (!countsArr.reduce((a, b) => a + b) > 0) break
            if(countsArr[i] === 0) continue
            else if (unique.includes(countsArr[i])) {
                countsArr[i]--
                res++
            }
            else {
                unique.push(countsArr[i])
                countsArr.splice(i, 1)
            }
        }
    }
    return res
};