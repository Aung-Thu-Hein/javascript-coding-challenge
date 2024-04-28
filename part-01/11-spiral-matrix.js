//Method-1
function spiralMatrix(n) {
  const result = [];
  let count = 1;
  let startRow = 0,
    endRow = n - 1,
    startCol = 0,
    endCol = n - 1;

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  while (startRow <= endRow && startCol <= endCol) {
    //top
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = count;
      count++;
    }
    startRow++;

    //right
    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = count;
      count++;
    }
    endCol--;

    //bottom
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = count;
      count++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = count;
      count++;
    }
    startCol++;
  }

    console.log(result);
}

spiralMatrix(2);
spiralMatrix(4);
spiralMatrix(5);
