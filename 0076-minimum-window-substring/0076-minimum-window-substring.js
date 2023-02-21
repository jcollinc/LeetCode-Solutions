/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return ""
    
    const rCount = new Map(), window = new Map()

    for (let char of t) {
        rCount.set(char, 1 + (rCount.get(char) || 0))
    }

    for (let [char, count] of rCount) {
        window.set(char, 0)
    }
    
    let start = 0, current = 0, required = rCount.size, minWin = Infinity, minStr = ""
    
    for (let end = 0; end < s.length; end++) {
        if (window.has(s[end])) {
            window.set(s[end], 1 + (window.get(s[end])))
            if (window.get(s[end]) === rCount.get(s[end])) current++
        }
        while (current === required) {
            if (end + 1 - start < minWin) {
               minWin = end + 1 - start
               minStr = s.slice(start, end + 1)
            }
            window.set(s[start], window.get(s[start]) - 1)
            if (rCount.has(s[start]) && window.get(s[start]) < rCount.get(s[start])) current--
            start++
        }
    }
    return minStr   
};