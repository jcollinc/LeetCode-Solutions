/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        candies[i] = candies[i] + extraCandies >= maxCandies
    }
    return candies
};