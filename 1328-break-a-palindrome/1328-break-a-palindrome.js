/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    let res = ""
    let done = false
    if (palindrome.length === 1) return ""
    for (let i = 0; i < palindrome.length; i++) {
            if (palindrome[i] !== "a" && !done && i !== (palindrome.length - 1) / 2) {
                res += "a"
                done = true
            }
            else res += palindrome[i]
    }
    return done ? res : res.slice(0, res.length - 1) + "b"
    return palindrome
};