/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }

    const memo = new Map();

    function tryCreateS3(i, j, k) {
        if (k === s3.length) {
            return true;
        }

        if (memo.has(`${i}-${j}`)) {
            return memo.get(`${i}-${j}`);
        }

        let canCreate = false;

        if (i < s1.length && s1[i] === s3[k]) {
            canCreate = tryCreateS3(i + 1, j, k + 1);
        }

        if (!canCreate && j < s2.length && s2[j] === s3[k]) {
            canCreate = tryCreateS3(i, j + 1, k + 1);
        }

        memo.set(`${i}-${j}`, canCreate);
        return canCreate;
    }

    return tryCreateS3(0, 0, 0);
};
