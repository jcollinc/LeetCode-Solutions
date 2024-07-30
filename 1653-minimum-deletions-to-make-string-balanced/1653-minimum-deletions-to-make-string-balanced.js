/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let countA = [], countB = []
    let count = 0
    for (let i = 0; i < s.length; i++) {
        countB[i] = count
        if (s[i] == 'b') count++
    }
    count = 0
    for (let i = s.length-1; i >= 0; i--) {
        countA[i] = count
        if (s[i] == 'a') count++
    }
    let min = Infinity
    console.log(countA, countB)
    for (let i = 0; i < s.length; i++) {
        min = Math.min(min, countA[i] + countB[i])    
    }
    return min
};