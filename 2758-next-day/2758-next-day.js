Date.prototype.nextDay = function() {
  this.setDate(this.getDate()+1)
  return this.toISOString().split('T')[0]
}

/**
 * const date = new Date("2014-06-20");
 * date.nextDay(); // "2014-06-21"
 */