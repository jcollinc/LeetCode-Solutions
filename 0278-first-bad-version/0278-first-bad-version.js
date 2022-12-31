/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n, mid = Math.floor((right + left) / 2)
        while (!(isBadVersion(mid) && !isBadVersion(mid-1))) {
            mid = Math.floor((right + left) / 2)
            if (isBadVersion(mid) && !isBadVersion(mid-1)) {
                return mid
            } else if (!isBadVersion(mid) && !isBadVersion(mid-1)) {
                left = mid + 1
            } else if (isBadVersion(mid) && isBadVersion(mid-1)) {
                right = mid
            }
        }
        return mid
    };
};