/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (!trust.length) return n === 1 ? 1 : -1
    let trusters = new Set()  
    let trusted = new Map()
    for (let trustInfo of trust) {
        trusters.add(trustInfo[0])
        trusted.set(trustInfo[1], 1 + (trusted.get(trustInfo[1]) || 0))
    }
    if (trusters.size === n) return -1
    for (let [candidate, trustCount] of trusted) {
        if (trusters.has(candidate) || trustCount !== n - 1) continue
        return candidate
    }
    return -1
};