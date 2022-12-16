/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let seenValues = new Set()
    let maxLength = 0
    let left = 0
    for (let right = 0; right < s.length; right++) {
        while(seenValues.has(s[right])) {
            seenValues.delete(s[left])
            left++
        }
        maxLength = Math.max(maxLength, right - left + 1)
        seenValues.add(s[right])
    }
    return maxLength
};