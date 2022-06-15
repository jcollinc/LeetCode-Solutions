/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function removeDuplicates(s, k) {
    let stack = []
    let counts = []
    for (let char of s) {
        if (!stack.length || stack[stack.length - 1] !== char) {
            stack.push(char)
            counts.push(1)
        } else {
            if (counts[counts.length - 1] === k - 1) {
                stack.length = stack.length - k + 1
                counts.pop()
            } else {
                stack.push(char)
                counts[counts.length - 1]++
            }
        }
    }
    return stack.join("")
};