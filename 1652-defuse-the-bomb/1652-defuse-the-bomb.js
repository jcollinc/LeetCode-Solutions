/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let output = new Array(code.length).fill(0)
    if (k > 0){
            for(let i = 0; i < code.length; i++){
                let count = 0, j = (i + 1) % code.length
                while(count < k){
                    output[i] += code[j]
                    j = (j + 1) % code.length
                    count++
            }
        }
    }
    if (k < 0){
            for(let i = 0; i < code.length; i++){
            let count = 0, j = i - 1
            while(count > k){
                if (j === -1) j = code.length - 1
                output[i] += code[j]
                count--, j--
            }
        }
    }
    return output 
};