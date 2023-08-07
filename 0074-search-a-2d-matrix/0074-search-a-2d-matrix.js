/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let m = matrix.length, n = matrix[0].length;
  let left = 0, right = m * n - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let candidate = matrix[Math.floor(mid / n)][mid % n];
    if (candidate === target) return true;
    else candidate < target ? left = mid + 1 : right = mid - 1;
  }
  return false;
};