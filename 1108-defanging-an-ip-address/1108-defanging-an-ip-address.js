/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let output = ""
    for (let char of address) {
        output += char === "." ? "[.]" : char
    }
    return output
};