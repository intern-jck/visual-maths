
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // make tuple for (k,v)
  let tuple = [k, v]; // tuple ==> [keyName, value]

  if (this._storage.get(index)) {
    let bucket = this._storage.get(index);
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i] = tuple;
        return;
      }
    }
    this._storage.get(index).push(tuple);
  } else {
    let bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  if (typeof k === 'string') {
    var index = getIndexBelowMaxForKey(k, this._limit);

    let bucket = this._storage.get(index);
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  } else if (Array.isArray(k)) {
    var result = [];
    for (var i = 0; i < k.length; i ++) {
      var index = getIndexBelowMaxForKey(k[i], this._limit);

      let bucket = this._storage.get(index);
      for (let j = 0; j < bucket.length; j++) {
        if (bucket[j][0] === k[i]) {
          result.push(bucket[j][1]);
        }
      }
    }
    return result;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert = O(n)  Technically O(n) because of the lookup at each bucket, but so fast its almost contast
retrieve = O(n) same reason as above
remove = O(n) same reason as above
 */


