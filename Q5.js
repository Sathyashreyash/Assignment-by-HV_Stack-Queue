// Q4. Given a park with few sensors present, cross it by taking the shortest safe path without activating the sensors.
// The park is in the form of an m× n matrix, and we need to find the shortest path from any cell in the first column to any cell in the last column of the matrix. The sensors are marked by the value 0 in the matrix, and all its eight adjacent cells can also activate the sensors. The path can only be constructed out of cells having value 1, and at any given moment, we can only move one step in one of the four directions. The valid moves are:

// Go Up: (a, b) ——> (a – 1, b)

// Go Left: (a, b) ——> (a, b – 1)

// Go Down: (a, b) ——> (a + 1, b)

// Go Right: (a, b) ——> (a, b + 1)

// Skill mapping: Js basics ( Queue)
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Function to delete an entire binary tree
    deleteTree() {
        if (!this.root) {
            return;
        }

        // Create a queue to store nodes to be deleted
        let queue = [];

        // Add root node to the queue
        queue.push(this.root);

        // Loop until queue is empty
        while (queue.length > 0) {
            // Get the current node from the queue
            let current = queue.shift();

            // Delete the current node
            current = null;

            // Add the left child of the current node to the queue
            if (current.left) {
                queue.push(current.left);
            }

            // Add the right child of the current node to the queue
            if (current.right) {
                queue.push(current.right);
            }
        }

        // Set the root of the tree to null
        this.root = null;
    }
}

// Example usage
let tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);

//   tree.deleteTree();
console.log(tree.root); // null
console.log(tree.deleteTree)

