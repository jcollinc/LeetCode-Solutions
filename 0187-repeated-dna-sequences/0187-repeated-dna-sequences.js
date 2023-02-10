/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s, k = 10) {
    if (k >= s.length) return []
    let output = new Set(), seenSequences = new Set()
    let left = 0, right = k
    while (right <= s.length) {
        let sequence = s.slice(left, right)
        if (seenSequences.has(sequence)) output.add(sequence)
        else seenSequences.add(sequence)
        left++, right++
    }
    return Array.from(output)
};