document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = generateBoard();
// {
//   cells: [
//     {
//       row: 0,
//       col: 0,
//       isMine: false,
//       isMarked: false,
//       hidden: true
//     }, 
//     {
//       row: 0,
//       col: 1,
//       isMine: false,
//       isMarked: false,
//       hidden: true
//     }, 
//     {
//       row: 0,
//       col: 2,
//       isMine: false,
//       isMarked: false,
//       hidden: true
//     }, 
//     {
//       row: 0,
//       col: 3,
//       isMine: false,
//       isMarked: false,
//       hidden: true
//     }, 
//     {
//       row: 1,
//       col: 0,
//       isMine: true,
//       isMarked: false,
//       hidden: true
//     }, 
//     {
//       row: 1,
//       col: 1,
//       isMine: false,
//       isMarked: false,
//       hidden: true
//     },
//     {
//       row: 1,
//       col: 2,
//       isMine: false,
//       isMarked: false,
//       hidden: true
//     },
//     {
//       row: 1,
//       col: 3,
//       isMine: false,
//       isMarked: false,
//       hidden: true
//     },
//     {
//       row: 2,
//       col: 0,
//       isMine: false,
//       isMarked: false,
//       hidden: true
//     },
//     {
//       row: 2,
//       col: 1,
//       isMine: false,
//       isMarked: false,
//       hidden: true
//     },
//     {
//       row: 2,
//       col: 2,
//       isMine: false,
//       isMarked: false,
//       hidden: true
//     },
//     {
//       row: 2,
//       col: 3,
//       isMine: true,
//       isMarked: false,
//       hidden: true
//     },
//     {
//       row: 3,
//       col: 0,
//       isMine: false,
//       isMarked: false,
//       hidden: true
//     },
//     {
//       row: 3,
//       col: 1,
//       isMine: false,
//       isMarked: false,
//       hidden: true
//     },
//     {
//       row: 3,
//       col: 2,
//       isMine: true,
//       isMarked: false,
//       hidden: true
//     },
//     {
//       row: 3,
//       col: 3,
//       isMine: false,
//       isMarked: false,
//       hidden: true
//     }]
// }

function startGame () {
  for (var i = 0; i < board.cells.length; i++) {  
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }  
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
//debugger
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
    return;
    } 
  }
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === true && board.cells[i].isMarked === false) {
    return;
    }
  }  



  lib.displayMessage('You win!')
} 


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
// var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.



function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0;
  for(var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine) {
      count++;
    }
  }
 return count;
}

function generateBoard() {
  var cells = []

  const cellCreator = (row, col, isMine, isMarked, hidden) => {
    newCell = {
      row: row,
      col: col,
      isMine: isMine,
      isMarked: isMarked,
      hidden: hidden,
    }
      return newCell
    }

  for (var i = 0; i < 6; i++) {

    for (var j = 0; j < 6; j++) {
      cellCreator(i, j, true, false, true);
      cells.push(newCell);
    } 
  }
  var generatedBoard = {cells}
  return generatedBoard;
}  

// function is assigned to variable board, var runs the function
// function generateBoard creates an arrey of 16 objects => ok
// each of the object has row, col, isMine, isMarked, and hidden properties => ok
// **there are 4 objects with row = 0, 4 row = 1, 4 row = 2 and 4 row = 3**
// **objects with row = 0 have col property set 1, 2, 3, 4**
// isMine property of all of them is set to true => ok
// hidden property of all of them is set to true => ok