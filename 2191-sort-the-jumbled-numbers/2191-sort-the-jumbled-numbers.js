/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    let converted = [], res = []
    for (let i = 0; i < nums.length; i++) {
        let newNum = ""
        let numStr = nums[i].toString()
        for (let digit of numStr) {
           newNum += mapping[parseInt(digit)]
        }
        converted.push([parseInt(newNum), i])
    }
    converted.sort((a, b) => a[0] - b[0])
    for (let [a,b] of converted) {
        res.push(nums[b])
    }
    return res
};