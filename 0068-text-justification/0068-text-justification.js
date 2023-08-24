/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let lineMap = [];
    let line = 0, charsInLine = 0, lastLine = 0;

    for (let i = 0; i < words.length; i++) {
        let wordLen = words[i].length;
        
        if (charsInLine + wordLen + (i - lastLine) > maxWidth) {
            line++;
            lastLine = i;
            charsInLine = wordLen;
            lineMap.push([words[i]]);
        } else {
            charsInLine += wordLen;
            if (lineMap[line]) {
                lineMap[line].push(words[i]);
            } else {
                lineMap[line] = [words[i]];
            }
        }
    }

    let res = [];
    for (let i = 0; i < lineMap.length; i++) {
        let words = lineMap[i];
        let str = words.join(' ');

        if (i !== lineMap.length - 1) {
            let len = words.reduce((acc, word) => acc + word.length, 0);
            let spaces = maxWidth - len;

            if (words.length > 1) {
                let slots = words.length - 1;
                let spacesBetweenWords = Math.floor(spaces / slots);
                let extraSpaces = spaces % slots;
                str = words.reduce((acc, word, idx) => {
                    if (idx === words.length - 1) {
                        return acc + word;
                    }
                    let spacesToAdd = spacesBetweenWords + (extraSpaces > 0 ? 1 : 0);
                    extraSpaces--;
                    return acc + word + ''.padStart(spacesToAdd);
                }, '');
            } else {
                str += ''.padStart(spaces);
            }
        } else {
            str += ''.padStart(maxWidth - str.length);
        }

        res.push(str);
    }
    
    return res;
};


