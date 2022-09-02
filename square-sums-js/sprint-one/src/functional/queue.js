var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  // Queues are FIFO

  // First In
  // Add property at end of object (back of the line)
  someInstance.enqueue = function(value) {
    let currentLength = Object.keys(storage).length;
    storage[currentLength] = value;
  };

  // First Out
  // Remove first property (first in line)
  someInstance.dequeue = function() {

    // The first property will be at key '0
    let string = storage[0];

    // If storage is empty...
    if (string === undefined) { return; }

    // Otherwise, delete property.
    delete storage['0'];

    // Now we need to update the keys
    let currentKeys = Object.keys(storage);

    for (let i = 0; i < currentKeys.length; i++) {
      storage[i] = storage[currentKeys[i]];
      delete storage[currentKeys[i]];
    }

    // Return the string we popped.
    return string;
  };

  // Count all properties in obj
  someInstance.size = function() {
    let currentLength = Object.keys(storage).length;
    return currentLength;
  };

  return someInstance;
};
