var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // First In
  list.addToTail = function(value) {
    // create new node
    var newNode = new Node(value);
    // check if head is null
    if (list.head === null) {
      // if head is null, set head to new node
      list.head = newNode;
    } else {
      var currentNode = list.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    list.tail = newNode;
  };

  //First Out
  list.removeHead = function() {
    var tempHead = list.head;
    list.head = tempHead.next;
    return tempHead.value;
  };

  list.contains = function(target) {

    // start with the head
    // check if the head has the target
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;
  };

  // our new method
  list.removeTail = function() {
    var currentNode = list.head;
    if (currentNode.next === null) {
      currentNode = null;
      list.head = null;
      list.tail = null;
    } else {
      while (currentNode.next.next !== null) {
        currentNode = currentNode.next;
      }
      // set tail to currentnode.next
      // remove currentnode.next.next
      currentNode.next = null;
      list.tail = currentNode;
    }
  };

  return list;
};


/*
 * Complexity: What is the time complexity of the above functions?

addToTail = O(n)
removeHead = O(1)
contains = O(n)

 */
