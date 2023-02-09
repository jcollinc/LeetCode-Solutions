/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
var minWindow = function(s1, s2) {
    let sizeStr1 = s1.length, sizeStr2 = s2.length, minLen = Infinity;
    
    let indexS1 = 0, indexS2 = 0, output = "";

    while (indexS1 < sizeStr1) {
        if (s1[indexS1] == s2[indexS2]) {
            indexS2++;
            if (indexS2 == sizeStr2) {
                let start = indexS1, end = indexS1+1
                indexS2--;
                while (indexS2 >= 0) {
                    if (s1[start] == s2[indexS2]) indexS2 -= 1;
                    if (indexS2 >= 0) start -= 1;
                }
                if (end - start < minLen) {
                    minLen = end - start;
                    output = s1.substring(start, end);
                }
                indexS1 = start, indexS2 = 0
            }
        }
        indexS1++;
    }
    return output;
};