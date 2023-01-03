/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  for (var i = 0,j=0; i < typed.length && j<=name.length; i++) {
      if (typed[i] == name[j]) j++;
      else if (typed[i]!=name[j-1]) return false
    } 
    return i==typed.length && j==name.length
};