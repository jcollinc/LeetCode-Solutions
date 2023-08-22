/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    if (columnNumber < 27) return String.fromCharCode(columnNumber + 64);
    let res = '';
    while (columnNumber > 0) {
        var temp = columnNumber % 26;
        temp = temp == 0 ? 26 : temp;
        res = String.fromCharCode(temp + 64) + res;
        columnNumber -= temp;
        columnNumber /= 26;
    }
    return res;
};