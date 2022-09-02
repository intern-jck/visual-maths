var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queue = {};

};


Queue.prototype.enqueue = function(value) {
  let currentLength = Object.keys(this.queue).length;
  this.queue[currentLength] = value;
};


Queue.prototype.dequeue = function() {

  // The first property will be at key '0
  let string = this.queue[0];

  // If this.queue is empty...
  if (string === undefined) { return; }

  // Otherwise, delete property.
  delete this.queue[0];

  // Now we need to update the keys
  let currentKeys = Object.keys(this.queue);

  for (let i = 0; i < currentKeys.length; i++) {
    this.queue[i] = this.queue[currentKeys[i]];
    delete this.queue[currentKeys[i]];
  }

  // Return the string we popped.
  return string;
};

Queue.prototype.size = function() {
  let currentLength = Object.keys(this.queue).length;
  return currentLength;
};

var MyQueue = new Queue();