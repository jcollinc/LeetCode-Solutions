/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const uniqueKeys = new Set([0]);
    const availableKeys = [0];
    let count = 1
    while (availableKeys.length) {
        let currentKey = availableKeys.pop();
        for (let key of rooms[currentKey]) {
           if (!uniqueKeys.has(key)) {
               uniqueKeys.add(key);
               availableKeys.push(key);
               count++
           }
        };
    }

    return count === rooms.length;
};

