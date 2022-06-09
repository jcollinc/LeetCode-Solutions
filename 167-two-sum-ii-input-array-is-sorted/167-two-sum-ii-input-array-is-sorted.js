/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[left] + numbers[right] === target) return [left + 1, right + 1]
        numbers[left] + numbers[right] < target ? left++ : right--
    }
    return [left + 1, right + 1]
};