/**
 * @param {string} s
 * @return {string}
 */

    // k = number of times to repeat
    // [ = need to start storing values to repeat
    // ] = stop storing, repeat the values until you reach open bracket

function decodeString(s) {
    let k = ''
    let multiplyBy = []
    let toRepeat = []
    let res = ''
    
    for (let char of s) {
        if(!isNaN(char)) {
            k = `${k}${char}`
            
        } else if (char === "[") {
            multiplyBy.push(k)
            k = ''
            toRepeat.push(res)
            res = ''
            
        } else if (char === "]") {
            res = toRepeat.pop() + res.repeat(multiplyBy.pop())
            
        } else {
            res += char  
        }
    }
    
    return res
};