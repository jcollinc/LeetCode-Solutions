/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let lenA = firstList.length, lenB = secondList.length
    let pointerA = 0, pointerB = 0, output = []
    
    while (pointerA < lenA && pointerB < lenB) {
        let currA = firstList[pointerA], currB = secondList[pointerB]
        let low = Math.max(currA[0], currB[0]), high = Math.min(currA[1], currB[1])
        if (low <= high) {
            output.push([low, high])
        }
        currA[1] < currB[1] ? pointerA++ : pointerB++
    }
    return output
};