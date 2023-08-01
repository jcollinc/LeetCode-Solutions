/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let metTarget = 0
    for (let hour of hours) {
        if (hour >= target) metTarget++
    }
    return metTarget
};