/**
 * @param {number} n
 * @param {number[]} batteries
 * @return {number}
 */
var maxRunTime = function(n, batteries) {
    let left = 1, right = Math.floor(batteries.reduce((a,b)=>a+b)/n)
    while (left < right) {
        let mid = Math.floor((left + right + 1) / 2);
        if (canPowerForMidHours(mid, n, batteries)) {
            left = mid
        } else {
            right = mid-1
        }
    }
    return left
}

const canPowerForMidHours = (hours, n, batteries) => {
    // Initialize the sum of the minimum of each battery and the time
    let sum = 0;
    for (let battery of batteries) {
        sum += Math.min(battery, hours);
    }
    // Return true if the sum is greater than or equal to the product of the time and n
    return (sum >= hours * n);
}


