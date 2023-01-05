
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
    let updatedTime = avgInfo[key] ? avgInfo[key].totalTime + (t - trips[id].t) : t - trips[id].t
    let updatedCount = avgInfo[key] ? avgInfo[key].tripCount + 1 : 1
    avgInfo[key] = {totalTime: updatedTime, tripCount: updatedCount}
    delete trips[id]
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let key = `${startStation} to ${endStation}`
    return this.avgInfo[key].totalTime / this.avgInfo[key].tripCount
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */