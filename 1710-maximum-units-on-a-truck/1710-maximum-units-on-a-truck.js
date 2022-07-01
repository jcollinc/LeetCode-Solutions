/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let truck = []
    boxTypes.sort((a, b) => (b[1] - a[1]))
    
  
    for (let box of boxTypes) {
        while (box[0] > 0 && truckSize > 0) {
            truck.push(box[1])
            box[0] = box[0] - 1
            truckSize--
        }
    }    
    
    return truck.reduce((a, b) => a + b)
};