/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  let res = 0
  for(let char of words){
    if(findSubsequence(s, char)) res++
  }
  return res
};
  
function findSubsequence(s, char){
  let idx = -1
  for(let c of char){
    let found = s.indexOf(c, idx+1)
    if(found == -1) return false
    idx = found
  }
  return true
}