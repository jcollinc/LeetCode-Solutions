/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    function checkPalindrome (s, i, j) {
        while (i < j) {
            if (s[i] !== s[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
   let i = 0, j = s.length - 1
   while (i < j) {
       if (s[i] != s[j]) {
           return checkPalindrome(s, i, j-1) || checkPalindrome(s, i + 1, j)   
       }
    i++
    j--
    }
    return true
};