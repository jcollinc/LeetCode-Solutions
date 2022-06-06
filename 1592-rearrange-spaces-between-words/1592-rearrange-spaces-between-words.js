/**
 * @param {string} text
 * @return {string}
 */
function reorderSpaces(text) {
  if (text.length === 1) return text
  // Defining tracking variables
  let spaces = 0
  let wordsArr = []
  // Split text into array of words and spaces
  let textArr = text.split(" ")
  // Calculate number of spaces and identify words
  for (let word of textArr) {
    if (word !== "") wordsArr.push(word)
  }
  for (let char of text.split("")) {
    if (char === " ") spaces++
  }
  // Recreate "text" with correct spacing
  let leftover 
  let res
  if (wordsArr.length > 1) {
    res = wordsArr.join(" ".repeat(spaces / (wordsArr.length - 1))) 
  }
  else {
    return `${wordsArr[0]} ${" ".repeat(spaces - wordsArr.length)}`
  }
  if (spaces % (wordsArr.length - 1) > 0) {
    leftover = " ".repeat(spaces % (wordsArr.length - 1))
    return `${res}${leftover}`
    
  }
  return res
};
