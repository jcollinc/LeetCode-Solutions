/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelCount = 0, jewelsSet = new Set(jewels)
    for (let stone of stones) {
        if (jewelsSet.has(stone)) jewelCount++
    }
    return jewelCount
};