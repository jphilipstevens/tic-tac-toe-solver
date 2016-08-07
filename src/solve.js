import transpose from "./transpose";
/**
 * get the winner for some set (a set is an array of size three)
 * 
 * @param set an array of columns (either row or column)
 * 
 * @return the winner of the set or null if no winner is in the set
 */
const getWinner = (set = []) => set.every(element => set[0] === element && !!set[0]) 
    ? set[0] 
    : null;

/**
 * This will determine the winner of the board based on only the rows
 * 
 * @param board a 2d array of rows
 * 
 * @return the winner of the board or null when no winner is set
 */
const getWinnerForRows = (board = [[]]) => board.reduce((previousRowWinner, row) => {
        return previousRowWinner || getWinner(row);
    }, null);

/**
 * This will return the winner of tic tac toe based on the board
 *
 * @param board: A board is a 2 dimensional array. unset spaces can be any falsey value
 * 
 * @return the winner of the board or null when no winner is set
 */
const solve = (board = [[]]) => {
    const rowWinner = getWinnerForRows(board);
    
    const transposedBoard = transpose(board);
    const columnwinner = getWinnerForRows(transposedBoard);

    const backslashSet = [board[0][0], board[1][1], board[2][2]];
    const backSlashDiagonalWinner = getWinner(backslashSet);

    const forwardslashSet = [board[0][2], board[1][1], board[2][0]];
    const forwardslashDiagonalWinner = getWinner(forwardslashSet)

    return rowWinner || columnwinner || backSlashDiagonalWinner || forwardslashDiagonalWinner;
};

const Solver = {
    solve,
    getWinner,
    getWinnerForRows
};

export default Solver;