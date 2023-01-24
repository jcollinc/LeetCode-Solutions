/**
 * @param {string} s
 * @return {number}
 */
const numberOfWays = (s) => op(s, '101') + op(s, '010')

const op = (s, t) => {
    let one = 0, two = 0, three = 0;
    for (const c of s) {
        if (c == t[2]) three += two;
        if (c == t[1]) two += one;
        if (c == t[0]) one++;
    }
    return three;
};