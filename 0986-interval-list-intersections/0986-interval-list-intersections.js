/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(list1, list2) {
    let ptr1 = 0, ptr2 = 0, output = []
    while (ptr1 < list1.length && ptr2 < list2.length) {
        let [start1, end1] = list1[ptr1], [start2, end2] = list2[ptr2]
        if (end2 >= start1 && start2 <= end1) {
            output.push([Math.max(start1, start2), Math.min(end1,end2)])
        }
        end1 < end2 ? ptr1++ : ptr2++
    }
    return output
};