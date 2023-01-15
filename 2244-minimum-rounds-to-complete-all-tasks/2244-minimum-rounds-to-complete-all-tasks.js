/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let map = new Map()
    let res = 0
    for (let num of tasks) {
        map.set(num, (1 + (map.get(num) || 0)))
    }
    for (let [key, value] of map) {
        if (value === 1) return -1
        else {
            while (value > 0) {
                if (value > 2) {
                    res += 1
                    value -= 3
                } else {
                    res += 1
                    value -= 2
                }
            }
        }
    }
    return res
};