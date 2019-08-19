// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0
// 205 

function zeroMatrix(matrix) {
    const row = Array(matrix.length).fill(false);
    const col = Array(matrix[0].length).fill(false);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row[i] = true;
                col[j] = true;
            }
        }
    }

    function nullifyRow(matrix, rowIndex) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[rowIndex][j] = 0;
        }
    }

    function nullifyCol(matrix, colIndex) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][colIndex] = 0;
        }
    }

    for (let i = 0; i < row.length; i++) {
        if (row[i]) {
            nullifyRow(matrix, i);
        }
    }

    for (let j = 0; j < matrix[0].length; j++) {
        if (col[j]) {
            nullifyCol(matrix, j);
        }
    }
}