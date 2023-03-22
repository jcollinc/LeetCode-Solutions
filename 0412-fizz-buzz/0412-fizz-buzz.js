/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let output = []
    for (let i = 0; i < n; i++) {
        let val = i+1
        if (!(val % 3 === 0 || val % 5 === 0)) output[i] = `${val}`
        else if (val % 3 === 0 && val % 5 === 0) output[i] = `FizzBuzz`
        else output[i] = val % 3 === 0 ? `Fizz` : `Buzz`
    }
    return output
};