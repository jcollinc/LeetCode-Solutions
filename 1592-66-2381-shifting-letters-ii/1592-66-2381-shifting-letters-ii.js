/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (input, shifts) {
    const  alphabetSize = 26;
    const charA = 97;
    const totalShifts = new Array(input.length + 1).fill(0);

    for (let shift of shifts) {
        const change = (shift[2] === 1) ? 1 : -1;
        totalShifts[shift[0]] += change;
        totalShifts[shift[1] + 1] -= change;
    }

    let res = input.split('');
    for (let i = 0; i < input.length; ++i) {
        const currentShift = (input.codePointAt(i) - charA + totalShifts[i] % alphabetSize + alphabetSize) % alphabetSize;
        res[i] = String.fromCodePoint(currentShift + charA);
        totalShifts[i + 1] += totalShifts[i];
    }

    return res.join('');
};