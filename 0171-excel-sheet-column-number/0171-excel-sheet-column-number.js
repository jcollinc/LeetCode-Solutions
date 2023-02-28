/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let l = columnTitle.length-1; 
    let result = 0;
    for(let i = 0;i<columnTitle.length;i++){
        result = result + ((columnTitle[i].charCodeAt()-64) * Math.pow(26,l--)); 
    }
    return result;
};