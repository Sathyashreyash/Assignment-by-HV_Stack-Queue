// Q3. Delete a node from a binary search tree (BST) keeping the following things in mind as follows :
// If the node is a leaf node

// If the node has 1 child node

// If the node has 2 child nodes.

// Skill mapping: Js intermediate (Binary search tree)

class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      let node = new Node(value);
  
      if (!this.root) {
        this.root = node;
        return this;
      }
  
      let current = this.root;
  
      while (true) {
        if (value === current.value) return undefined;
  
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            return this;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = node;
            return this;
          }
          current = current.right;
        }
      }
    }
  
    find(value) {
      if (!this.root) return false;
      let current = this.root,
          found = false;
  
      while (current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }
  
      if (!found) return false;
      return current;
    }
  
    remove(value) {
      this.root = this._removeNode(this.root, value);
    }
  
    _removeNode(current, value) {
      if (!current) return null;
  
      if (value === current.value) {
        // Case 1: leaf node
        if (!current.left && !current.right) {
          return null;
        }
  
        // Case 2: node with one child
        if (!current.left) {
          return current.right;
        }
        if (!current.right) {
          return current.left;
        }
  
        // Case 3: node with two children
        let inOrderSuccessor = this._findMinNode(current.right);
        current.value = inOrderSuccessor.value;
        current.right = this._removeNode(current.right, inOrderSuccessor.value);
        return current;
      }
  
      if (value < current.value) {
        current.left = this._removeNode(current.left, value);
        return current;
      }
  
      current.right = this._removeNode(current.right, value);
      return current;
    }
  
    _findMinNode(node) {
      while (node && node.left) {
        node = node.left;
      }
      return node;
    }
  }
  
  // Example usage
  let bst = new BST();
  bst.insert(5);
  bst.insert(2);
  bst.insert(8);
  bst.insert(1);
  bst.insert(3);
  bst.insert(7);
  bst.insert(9);
  
  console.log(bst.find(5)); // Output: Node { value: 5, left: Node { value: 2, left: [Node], right: [Node] }, right: Node { value: 8, left: [Node], right: [Node] } }
  bst.remove(5);
  console.log(bst.find(5)); // Output: false
  
