/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    let arr = new Array(n + 1).fill(0);
    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i] === 0) continue;
        let left = Math.max(0, i - ranges[i]);
        arr[left] = Math.max(arr[left], i + ranges[i]);
    }
    let end = 0, farCanReach = 0, count = 0;
    for (let i = 0; i < arr.length && end < n; end = farCanReach) {
        count++;
        while (i < arr.length && i <= end) {
            farCanReach = Math.max(farCanReach, arr[i]);
            i++;
        }
        if (end === farCanReach) return -1;
    }
    return count;
}