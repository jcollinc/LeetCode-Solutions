
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
    this.front = null
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (this.stack1.length === 0) this.front = x
    this.stack1.push(x)
};

/**
 * @return {number}
 */


MyQueue.prototype.pop = function() {
    
    while (this.stack1.length > 1) {
        this.stack2.push(this.stack1.pop())
    }
    this.front = this.stack2[this.stack2.length - 1] || null
    let output = this.stack1.pop()

    while (this.stack2.length) {
        this.stack1.push(this.stack2.pop())
    }

    return output
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.front
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.front
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */