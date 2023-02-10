/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s, k = 10) {
    if (k >= s.length) return []
    let output = [], seenSequences = new Map()
    let left = 0, right = k
    while (right <= s.length) {
        let sequence = s.slice(left, right), count = seenSequences.get(sequence)
        if (seenSequences.has(sequence) && count && count === 1) output.push(sequence)
        seenSequences.set(sequence, 1 + (count || 0))
        left++, right++
    }
    return output
};