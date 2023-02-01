
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
    this.trips[id] = {start: stationName, time: t}
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let { trips, avgInfo } = this
    let tripTime = t - trips[id].time 
    let key = `${trips[id].start} to ${stationName}`
    if (avgInfo[key]) { 
        avgInfo[key] = {
            time: avgInfo[key].time + tripTime, 
            travellerCount: avgInfo[key].travellerCount + 1
        }
    } else {
        avgInfo[key] = {time: tripTime, travellerCount: 1}
    }
    delete this.trips[id]
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let {time, travellerCount} = this.avgInfo[`${startStation} to ${endStation}`]
    return time / travellerCount
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */