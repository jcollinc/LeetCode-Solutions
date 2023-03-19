/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    let map = new Map(), mapped = new Set()
    
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i]) && !mapped.has(t[i])) {
            map.set(s[i], t[i])
            mapped.add(t[i])
        }
        else {
            if (map.get(s[i]) === t[i]) continue
            else return false
        } 
    }
    
    return true
};