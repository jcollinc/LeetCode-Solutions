/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) return 0;

    const wordSet = new Set(wordList);
    const queue = [[beginWord, 1]];
    const seen = new Set([beginWord]);

    while (queue.length) {
        const [word, level] = queue.shift();

        for (let i = 0; i < word.length; i++) {
            for (let charCode = 97; charCode <= 122; charCode++) {
                const newWord = word.slice(0, i) + String.fromCharCode(charCode) + word.slice(i + 1);
                
                if (wordSet.has(newWord)) {
                    if (newWord === endWord) {
                        return level + 1;
                    }
                    
                    if (!seen.has(newWord)) {
                        seen.add(newWord);
                        queue.push([newWord, level + 1]);
                    }
                }
            }
        }
    }
    
    return 0;
};
