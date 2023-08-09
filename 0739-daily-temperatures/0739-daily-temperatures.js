/**
 * @param {number[]} temps
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let idStack = [], res = new Array(temperatures.length).fill(0);
    let n = temperatures.length
    for (let i=0; i<n;i++) {
        const temp = temperatures[i];
        while (idStack.length && temp > temperatures[idStack[idStack.length-1]]) {
            const lastId = idStack.pop();
            res[lastId] = i - lastId;
        }
        idStack.push(i);
    }
    return res;
};