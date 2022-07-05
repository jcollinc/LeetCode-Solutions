/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    
    function isAscending(arr) {
        return arr.every(function (x, i) {
            return i === 0 || x > arr[i - 1];
        });
    }
    
    function isDescending(arr) {
        return arr.every(function (x, i) {
            return i === 0 || x < arr[i - 1];
        });
    }
    
    if (isAscending(ratings) || isDescending(ratings)) {
        let res = 0
        for (let i = 1; i <= ratings.length; i++) {
            res += i
        }
        return res
    }
           
    let countss = []
    for (let val of ratings) {
        countss.push(1)
    }
    let done = false
    while (!done) {
        for (let i = 0; i < ratings.length; i++) {
            done = true
            if (ratings[i] > ratings[i + 1] && countss[i] <= countss[i + 1]) {
                countss[i]++
                done = false
                break
            }
            else if (ratings[i] < ratings[i + 1] && countss[i] >= countss[i + 1]) {
                countss[i+1]++
                done = false
                break
            }
        }
    }
    return countss.reduce((a, b) => a + b)
};