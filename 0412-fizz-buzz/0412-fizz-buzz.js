/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let output = []
    for (let i = 0; i < n; i++) {
        let val = i + 1
        if (val % 3 === 0 && val % 5 === 0) val = "FizzBuzz"
        else if (val % 3 === 0) val = "Fizz"
        else if (val % 5 === 0) val = "Buzz"
        output[i] = `${val}`
    }
    return output
};