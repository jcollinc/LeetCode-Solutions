/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = new Array(s.length);

    function buildWord(idx) {
        if (idx === s.length) return true;
        if (typeof memo[idx] !== 'undefined') return memo[idx];
        for (let end = idx + 1; end <= s.length; end++) {
            const word = s.substring(idx, end);
            if (wordSet.has(word) && buildWord(end)) {
                memo[idx] = true;
                return true;
            }
        }
        memo[idx] = false;
        return false;
    }
    return buildWord(0);
};
