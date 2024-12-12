var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  // [func(), 1, '1', [], [[]], {}]
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.contains(item) === false) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (typeof item === 'number' || typeof item === 'string' || typeof item === 'boolean') {
    if (this._storage.includes(item)) {
      return true;
    }
  } else if (typeof item === 'object' || typeof item === 'function') {
    for (var i = 0; i < this._storage.length; i++) {
      if (JSON.stringify(this._storage[i]) === JSON.stringify(item)) {
        return true;
      }
    }
  }

  return false;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    let itemIndex = this._storage.indexOf(item);
    this._storage.splice(itemIndex, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
add = O(1)
contains = O(n)
remove = O(n)
 */
