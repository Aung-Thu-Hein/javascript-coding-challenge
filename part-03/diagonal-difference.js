function diagonalDifference(arr) {

    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for(let row=0; row<arr.length; row++) {
        let col2 = arr.length -1;
        for(let col= arr.length - 1; col>=0; col--) {
            if(row === col) {
                primaryDiagonal += arr[row][col];
            }
            if(col === 0) {
                col2 = col2 - row;
            }
        }
        secondaryDiagonal += arr[row][col2];
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

console.log(diagonalDifference([[1, 2, 3], [12, -32, 2], [44, -55, 22]]));
console.log(diagonalDifference([[11, 22, 33, 44], [13, 23, 56, 90], [-1, -4, -5, -99], [34, 21, -50, 23]]));
