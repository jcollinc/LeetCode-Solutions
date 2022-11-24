
var UndergroundSystem = function() {
    this.trips = {}
    this.avgInfo = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.trips[id] = {start: stationName, t}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const {trips, avgInfo} = this
    let key = `${trips[id].start} to ${stationName}`
    if (avgInfo[key]) {
        avgInfo[key] = {totalTime: avgInfo[key].totalTime + t - trips[id].t, count: avgInfo[key].count + 1}
    } else {
        avgInfo[key] = {totalTime: t - trips[id].t, count: 1}
    }
    delete trips[id]
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let key = `${startStation} to ${endStation}`
    const {totalTime, count} = this.avgInfo[key]
    return  totalTime / count
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */