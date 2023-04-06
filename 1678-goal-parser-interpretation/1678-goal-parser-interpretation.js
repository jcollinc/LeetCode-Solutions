/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let output = "", char = "", map = new Map([["G", "G"],["()","o"],["(al)", "al"]])
    for (let i = 0; i < command.length; i++) {
        char += command[i]
        if (map.has(char)) {
            output += map.get(char)
            char = ""
        }
    }
    return output
};