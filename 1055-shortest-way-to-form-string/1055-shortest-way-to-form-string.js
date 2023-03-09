/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
    let round = 0, targetIdx = 0
    while (targetIdx < target.length) {
        let advanced = false
        for (let char of source) {
            if (char === target[targetIdx]) {
                targetIdx++
                advanced = true
            }
        }
        if (!advanced) return -1
        round++
    }
    return round
};