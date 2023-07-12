/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */



var minDays = function(bloomDay, m, k) {
    
    const canCreateAllBouquets = function(dayCount) {
        let bouquets = 0, flowers = [...bloomDay], consec = 0
        for (let i = 0; i < bloomDay.length; i++) {
            if (flowers[i] <= dayCount) {
                consec++
                if (consec === k) {
                    bouquets++
                    consec = 0
                }
            } else consec = 0
        }
        return bouquets
    }
    
    
    let left = Math.min(...bloomDay), right = Math.max(...bloomDay)
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        canCreateAllBouquets(mid) >= m ? right = mid : left = mid + 1
    }
    
    return canCreateAllBouquets(left) >= m ? left : -1
};

