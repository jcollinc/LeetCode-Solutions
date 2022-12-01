/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = {a:1, e:1, i:1, o:1, u:1, A:1, E:1, I:1, O:1, U:1}
    let count1 = 0
    let count2 = 0
    for (let i = 0; i < s.length; i++) {
        if (vowels[s[i]] && i < s.length / 2) count1++
        else if (vowels[s[i]]) count2++
    }
    return count1 === count2
    
};