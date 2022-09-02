var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // We can store the values of the stack and the stack's method in one object
  var newQueue = {'queue': {}};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

// First In
// Add property at end of object (back of the line)
queueMethods.enqueue = function(value) {
  let currentLength = Object.keys(this.queue).length;
  this.queue[currentLength] = value;
};

// First Out
queueMethods.dequeue = function() {

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

queueMethods.size = function() {
  let currentLength = Object.keys(this.queue).length;
  return currentLength;
};