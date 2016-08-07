/**
 * creates the transpose of a Matrix.
 * 
 * Credit goes to http://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript for helping
 * 
 * @param matrix: some matrix to transpose
 * 
 * @return the transposed matrix or an empty array if undefined was passed in
 */
export default (matrix = [[]]) => {
    const seedArray = matrix[0];

    return seedArray.map((column, columnIndex) => {
        return matrix.map((row, rowIndex) => matrix[rowIndex][columnIndex]);
    })
};