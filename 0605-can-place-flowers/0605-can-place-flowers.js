/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let idx = 0
    while (n > 0 && idx < flowerbed.length) {
        if (flowerbed[idx] === 0 
            && (!flowerbed[idx-1] || flowerbed[idx-1] === 0) 
            && (!flowerbed[idx+1] || flowerbed[idx+1] === 0)
        ) {
            flowerbed[idx] = 1
            n--
        }
        idx++
    }
    return n === 0
};