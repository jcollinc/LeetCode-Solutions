/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return []
    let output = [], args = []
    const letterMap = new Map([
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz']
    ])
    for (let i = 0; i < digits.length; i++) {
        args.push(letterMap.get(digits[i]))
    }
    function getCombinations(curr, idx) {
        if (curr.length === digits.length) {
            output.push(curr)
            return
        }
        for (let i = 0; i < args[idx].length; i++) {
            getCombinations(curr + args[idx][i], idx+1)
        }
    }
    getCombinations("", 0)
    return output
};

//           index 0         a (options b, c)
//                             \  
//           index(0+1)         d (options e, f)
//                               \
//           index(1+1)            g (options h, i)

           
            