
var UndergroundSystem = function() {
    this.trips = {}
    this.avgTime = {}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    const { trips } = this
    trips[id] = { startStation: stationName, t}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const { trips, avgTime } = this
    let prevCheckIn = trips[id]
    let key = `${prevCheckIn.startStation} to ${stationName}`
    if (avgTime[key]) {
        avgTime[key] = {total: avgTime[key].total + t - prevCheckIn.t , count: avgTime[key].count + 1}
    } else {
        avgTime[key] = {total: t - prevCheckIn.t, count: 1}
    }
    delete trips[id]
        console.log(trips)
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const { avgTime } = this
    let key = `${startStation} to ${endStation}`
    const {total, count} = avgTime[key]
    return total / count
    
    
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */