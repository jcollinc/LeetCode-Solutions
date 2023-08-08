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
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    while (queue.length) {
        const [word, level] = queue.shift();

        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                const newWord = word.slice(0, i) + alphabet[j] + word.slice(i + 1);

                if (newWord === endWord) {
                    return level + 1;
                }

                if (wordSet.has(newWord) && !seen.has(newWord)) {
                    seen.add(newWord);
                    queue.push([newWord, level + 1]);
                }
            }
        }
    }
    return 0;
};
