/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.sizeList = new Array()
    this.left = 0
    this.size = size
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.sizeList[this.left] = val
    this.left = (this.left + 1) % this.size
    return this.sizeList.reduce((a, b) => a + b) / this.sizeList.length
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */