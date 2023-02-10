/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if (10 >= s.length) return []
    let output = [], seenSequences = new Map()
    let left = 0, right = 10
    while (right <= s.length) {
        let sequence = s.slice(left, right), count = seenSequences.get(sequence)
        if (seenSequences.has(sequence) && count && count === 1) output.push(sequence)
        seenSequences.set(sequence, 1 + (count || 0))
        left++, right++
    }
    return output
};