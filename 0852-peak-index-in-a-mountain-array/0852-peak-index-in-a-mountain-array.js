/**
 * @param {number[]} arr
 * @return {number}
 */

const direction = (arr, idx) => {
    if (arr[idx] > arr[idx-1] && arr[idx] > arr[idx+1]) return 'peak'
    else if (arr[idx] > arr[idx-1] && arr[idx] < arr[idx+1]) return 'increasing'
}

var peakIndexInMountainArray = function(arr) {
    let left = 0, right = arr.length-1
    while (left < right) {
        let mid = Math.floor((right+left)/2)
        if (direction(arr, mid) === 'peak') return mid
        else if (direction(arr, mid) === 'increasing') left = mid
        else right = mid
    }
    return left
};