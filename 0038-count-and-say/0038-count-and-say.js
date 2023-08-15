/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let curr = '1'
    for (let i = 1; i < n; i++) {
        curr = getNextSequence(curr)
    }
    return curr
};

function getNextSequence (str) {
    let idx = 0, nextSequence = ""
    while (idx < str.length) {
        let count = 0, curr = str[idx]
        while (idx < str.length && str[idx] === curr) {
            idx++, count++
        }
        nextSequence = nextSequence + count + curr
    }
    return nextSequence 
}