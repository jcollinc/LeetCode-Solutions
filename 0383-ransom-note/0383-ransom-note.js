/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false
    let magazineMap = {}
    for (let char of magazine) {
        magazineMap[char] = magazineMap[char] + 1 || 1
    }
    for (let char of ransomNote) {
        if (!magazineMap[char]) return false
        else {
            magazineMap[char]--
        }
    }
    return true
};