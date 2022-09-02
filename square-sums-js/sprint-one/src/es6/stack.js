class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.stack = [];
  }

  push(value) {
    let currentKeys = Object.keys(this.stack);
    for (let i = 0; i < currentKeys.length; i++) {
      // create a new prop to store old prop
      this.stack[i + 1] = this.stack[currentKeys[i]];
      delete this.stack[currentKeys[i]];
    }
    // now we can add the property
    this.stack[0] = value;
  }

  pop() {
    // The first property will be at key '0
    let string = this.stack[0];

    // If storage is empty...
    if (string === undefined) { return; }

    // Otherwise, delete property.
    delete this.stack['0'];

    // Now we need to update the keys
    let currentKeys = Object.keys(this.stack);

    for (let i = 0; i < currentKeys.length; i++) {
      this.stack[i] = this.stack[currentKeys[i]];
      delete this.stack[currentKeys[i]];
    }
    // Return the string we popped.
    return string;
  }

  size() {
    let currentLength = Object.keys(this.stack).length;
    return currentLength;
  }

}