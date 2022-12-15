/**
 * @param {string} s
 * @return {number}
 */

/*
    input = string
    return = integer
    
    initialize variable to track maximum length so far 
    initialize variable to hold left index of sliding window
    use for loop with i to represent right index
    for each i, check if length exceeds current longest
    if a match is encountered, continue incrementing left index until there is no longer a match
    
    
*/
var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) return 1
    let left = 0
    let longestLength = 0
    let set = new Set()
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left++ 
        }
        set.add(s[right])
        longestLength = Math.max(longestLength, (right - left + 1))
    }
    return longestLength
};