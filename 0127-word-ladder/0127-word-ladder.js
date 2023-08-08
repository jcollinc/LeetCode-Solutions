/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;
    let wordSet = new Set(wordList);
    let queue = [[beginWord, 1]];
    let seen = new Set([beginWord]);
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    while (queue.length) {
        let [word, level] = queue.shift();
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                let newWord = word.slice(0, i) + alphabet[j] + word.slice(i+1);
                if (!wordSet.has(newWord)) continue
                if (newWord === endWord) return level+1;
                if (!seen.has(newWord)) {
                    seen.add(newWord);
                    queue.push([newWord, level+1]);
                }
            }
        }
    }
    return 0;
};
