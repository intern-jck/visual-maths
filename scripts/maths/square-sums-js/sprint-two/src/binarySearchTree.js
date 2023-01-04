var BinarySearchTree = function(value) {
  var newBST = {};
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;

  _.extend(newBST, bstMethods);
  return newBST;
};

var bstMethods = {};


bstMethods.insert = function(value) {

  // recursion:
  var searchTree = function(bstNode, value) {
    //  if value is less than root.value
    if (value < bstNode.value) {
      //    if root.left is null
      if (!bstNode.left) {
        // add new bstNode to root.left

        // set bstNode.parent = this.value?
        console.log(bstNode.value, value);
        bstNode.left = BinarySearchTree(value);
      } else {
        // else return recurse with root.left
        searchTree(bstNode.left, value);
      }
      // if value is greater than root.value
    } else if (value > bstNode.value) {
      // if root.right is null
      if (!bstNode.right) {
        //  add new bstNode to root.right
        console.log(bstNode.value, value);
        bstNode.right = BinarySearchTree(value);
      } else {
        //  return recurse with root.right
        searchTree(bstNode.right, value);
      }
    } else {
      return;
    }
  };

  // return the recursive func to invoke
  searchTree(this, value);
  console.log(this);
};


bstMethods.contains = function(value) {
  var findTree = function(bstNode, target) {
    // boolean for when target is found, set false at start
    var isBSTFound = false;
    // search first node
    // if match, return
    if (bstNode.value === target) {
      // console.log('found', this.value, bstNode.value);

      return true;
    } else if (target > bstNode.value) {
      if (bstNode.right) {
        return findTree(bstNode.right, target);
      } else {
        return false;
      }
    } else {
      if (bstNode.left) {
        return findTree(bstNode.left, target);
      } else {
        return false;
      }
    }
  };
  return findTree (this, value);
};

bstMethods.depthFirstLog = function(cb) {

  var bstCb = function (bstNode, cb) {
    cb(bstNode.value);
    // do the left side
    if (bstNode.left !== null) {
      bstCb(bstNode.left, cb);
    }
    if (bstNode.right !== null) {
    // do the right side
      bstCb(bstNode.right, cb);
    }
  };
  bstCb (this, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?

insert = O(log(n))
contains = O(log(n))
depthFirstLog = O(n)

 */