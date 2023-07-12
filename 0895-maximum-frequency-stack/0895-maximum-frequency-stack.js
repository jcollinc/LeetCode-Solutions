
var FreqStack = function() {
    this.frequencyCounter = new Map()
    this.frequencyStacks = new Map()
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    this.frequencyCounter.set(val, (this.frequencyCounter.get(val) || 0) + 1)
    let updatedFrequency = this.frequencyCounter.get(val)
    if (this.frequencyStacks.has(updatedFrequency)) {
        this.frequencyStacks.set(
            updatedFrequency, 
            [...this.frequencyStacks.get(updatedFrequency), val]
        )
    } else {
        this.frequencyStacks.set(updatedFrequency, [val])
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let frequencyToPop = this.frequencyStacks.size
    let poppedVal = this.frequencyStacks.get(frequencyToPop).pop()
    if (!this.frequencyStacks.get(frequencyToPop).length) this.frequencyStacks.delete(frequencyToPop)
    this.frequencyCounter.set(poppedVal, this.frequencyCounter.get(poppedVal) - 1)
    return poppedVal
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */