/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (s.length <= numRows || numRows === 1) return s
    let sMap = new Map()
    for (let i = 0; i < numRows; i++) {
        sMap.set(i, "")
    }
    let increase = true, tracker = 0
    for (let i = 0; i < s.length; i++) {
        sMap.set(tracker, sMap.get(tracker) + s[i])
        increase ? tracker++ : tracker --
        if (tracker === 0 || tracker === numRows - 1) increase = !increase
    }
    let res = ""
    for (let [idx, section] of sMap) {
        res += section
    }
    return res
};