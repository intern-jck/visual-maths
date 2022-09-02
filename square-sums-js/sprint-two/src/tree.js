var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  // console.log(this);
  var isFound = false;

  var helper = function(node, target) {
    if (node.value === target) {
      isFound = true;
    }

    if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++) {
        isFound = isFound || helper(node.children[i], target);
      }
    }

    return isFound;
  };

  return helper(this, target);
};

treeMethods.traverse = function(cb) {
  var traverseHelper = function (node, cb) {
    cb(node.value);

    if (node.children !== null) {
      node.children.forEach(function(child) {
        traverseHelper(child, cb);
      });
    }
  };
  traverseHelper (this, cb);
};


/*
 * Complexity: What is the time complexity of the above functions?

addChild = O(1)
contains = O(n)
 */
