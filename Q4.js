// Q4. Given a park with few sensors present, cross it by taking the shortest safe path without activating the sensors.
// The park is in the form of an m× n matrix, and we need to find the shortest path from any cell in the first column to any cell in the last column of the matrix. The sensors are marked by the value 0 in the matrix, and all its eight adjacent cells can also activate the sensors. The path can only be constructed out of cells having value 1, and at any given moment, we can only move one step in one of the four directions. The valid moves are:

// Go Up: (a, b) ——> (a – 1, b)

// Go Left: (a, b) ——> (a, b – 1)

// Go Down: (a, b) ——> (a + 1, b)

// Go Right: (a, b) ——> (a, b + 1)

// // Skill mapping: Js basics ( Queue)
function shortestPath(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    
    // check if a cell is safe to move to
    function isSafe(row, col) {
      return row >= 0 && row < numRows && col >= 0 && col < numCols && matrix[row][col] === 1;
    }
    
    // initialize starting cells in the first column
    const queue = [];
    for (let row = 0; row < numRows; row++) {
      if (matrix[row][0] === 1) {
        queue.push([row, 0]); // add starting cell to the queue
        matrix[row][0] = 0; // mark starting cell as visited
      }
    }
    
    // perform BFS
    let distance = 0;
    while (queue.length > 0) {
      const levelSize = queue.length;
      distance++;
      for (let i = 0; i < levelSize; i++) {
        const [row, col] = queue.shift();
        // check if we reached any cell in the last column
        if (col === numCols - 1) {
          return distance;
        }
        // explore safe neighbors
        const neighbors = [[row - 1, col], [row, col - 1], [row + 1, col], [row, col + 1]];
        for (let [nRow, nCol] of neighbors) {
          if (isSafe(nRow, nCol)) {
            queue.push([nRow, nCol]);
            matrix[nRow][nCol] = 0; // mark neighbor as visited
          }
        }
      }
    }
    
    return -1; // no safe path found
  }

  const matrix = [
    [1, 1, 1, 1],
    [0, 1, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 0]
  ];
  
  console.log(shortestPath(matrix)); // output: 
  