/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    if (w >= Math.max(...capital)) {
      profits.sort((a, b) => b - a);
      return profits.slice(0, k).reduce((acc, num) => acc + num, w);
    }
    let projectsCompleted = 0, totalCapital = w
    while (projectsCompleted < k) {
        let maxProfit = 0, n = profits.length, currentCompletedProject = -1
        for (let i = 0; i < n; i++) {
            if (capital[i] > totalCapital) continue
            if (profits[i] > maxProfit) {
                maxProfit = profits[i]
                currentCompletedProject = i
            }
        }
        if (currentCompletedProject === -1) break
        projectsCompleted++
        capital[currentCompletedProject] = Infinity
        totalCapital += maxProfit
    }
    return totalCapital
};




