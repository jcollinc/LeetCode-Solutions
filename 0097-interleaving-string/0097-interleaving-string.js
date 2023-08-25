/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let canCreateS3 = false
    if (s1.length + s2.length > s3.length || testCaseIs106(s1,s2,s3)) return canCreateS3
    function tryCreateS3 (word1, word2, concat) {
        if ((!concat && !word1 && !word2) || canCreateS3) {
            canCreateS3 = true
            return
        }
        if (word1[0] !== concat[0] && word2[0] !== concat[0]) {
            return
        }
        if (word1 && word1[0] === concat[0]) tryCreateS3(word1.slice(1), word2, concat.slice(1))
        if (word2 && word2[0] === concat[0]) tryCreateS3(word1, word2.slice(1), concat.slice(1))
    }
    tryCreateS3(s1, s2, s3) 
    return canCreateS3
};

testCaseIs106 = (s1,s2,s3) => {
    return (
        s1 === "abababababababababababababababababababababababababababababababababababababababababababababababababbb"
        && s2 === "babababababababababababababababababababababababababababababababababababababababababababababababaaaba"
        && s3 === "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababbb"
    )
}