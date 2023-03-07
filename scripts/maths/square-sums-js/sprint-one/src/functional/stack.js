var Stack = function () {
  // The new stack being created /instantiated.
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Stacks are LIFO (Last In First Out)

  // Last In
  // Add a string at the beginning of storage
  someInstance.push = function (value) {

    let currentKeys = Object.keys(storage);
    for (let i = 0; i < currentKeys.length; i++) {
      // create a new prop to store old prop
      storage[i + 1] = storage[currentKeys[i]];
      delete storage[currentKeys[i]];
    }
    // now we can add the property
    storage[0] = value;
  };

  // First Out
  // Remove first property
  someInstance.pop = function () {

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

  someInstance.size = function () {
    let currentLength = Object.keys(storage).length;
    return currentLength;
  };

  return someInstance;
};

