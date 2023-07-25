/**
 * @param {number[]} arr
 * @return {number}
 */

const getDirection = (arr, idx) => {
    if (arr[idx] > arr[idx-1] && arr[idx] > arr[idx+1]) return 'peak'
    else if (arr[idx] > arr[idx-1] && arr[idx] < arr[idx+1]) return 'increasing'
    else return 'decreasing'
}
var peakIndexInMountainArray = function(arr) {
    let left = 0, right = arr.length-1
    while (left <= right) {
        let mid = Math.floor((right+left)/2)
        let direction = getDirection(arr, mid)
        if (direction === 'peak') return mid
        else if (direction === 'increasing') left = mid
        else right = mid
    }
    return left
};