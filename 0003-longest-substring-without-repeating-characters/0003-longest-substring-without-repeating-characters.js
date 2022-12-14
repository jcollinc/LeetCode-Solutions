/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0
    let longestLen = 0
    for (let i = 0; i < s.length; i++) {
        let j = i+1, counter = 1, ref = {[s[i]]: `${i}`}
        let left = s[i], right = s[j]
        while (!ref[s[j]] && j < s.length) {
            ref[s[j]] = `${i}`
            counter++
            j++
        }
        i = parseInt(ref[s[j]])
        if (counter > res) res = counter
    }
    return res
};