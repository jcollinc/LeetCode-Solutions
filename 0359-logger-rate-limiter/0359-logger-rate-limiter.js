
var Logger = function() {
    this.logs = new Map()
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.logs.has(message)) {
        let prevTime = this.logs.get(message)
        if (timestamp >= prevTime + 10) {
            this.logs.set(message, timestamp)
            return true
        }
        return false
    } else {
        this.logs.set(message, timestamp)
        return true
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */