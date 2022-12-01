/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let s1 = s.substring(s.length / 2)
    let s2 = s.substring(0, s.length / 2)
    let vowels = {a:1, e:1, i:1, o:1, u:1, A:1, E:1, I:1, O:1, U:1}
    let count1 = 0
    let count2 = 0
    for (let char of s1) {
        if (vowels[char]) count1++
    }
    for (let char of s2) {
        if (vowels[char]) count2++
    }
    return count1 === count2
    
};