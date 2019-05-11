document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true
    }, 
    {
      row: 0,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true
    }, 
    {
      row: 0,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true
    }, 
    {
      row: 0,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true
    }, 
    {
      row: 1,
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true
    }, 
    {
      row: 1,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 1,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 2,
      col: 3,
      isMine: true,
      isMarked: false,
      hidden: true
    },
    {
      row: 3,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 3,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true
    },
    {
      row: 3,
      col: 2,
      isMine: true,
      isMarked: false,
      hidden: true
    },
    {
      row: 3,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true
    }]
}

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



// For each cell, check to see if both .isMine and .isMarked are true. 
// If any mine still exists that isn't marked, the player hasn't won yet and you can return to 
// exit out of the function.

// isMine === true && isMarked === false || board.cells[i].hasOWnProperty(isMarked) === false

// If every mine is marked, but there are still cells with the hidden property set to true, 
//the player hasn't won yet and you can return out of the function.

// If both these criteria pass, the player has won! There's a displayMessage function call at 
// the bottom of checkForWin you can use to tell them so.






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

