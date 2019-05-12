document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = generateBoard();
var victorySound = new Audio("gameWin.mp3");

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

  victorySound.play();
  lib.displayMessage('Whoop whoop!')
} 


var restartGameButton = document.getElementById("restart");
restartGameButton.addEventListener("click", restartTheGame);

function restartTheGame() {
  location.reload();
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

//  surrounding.forEach(() => if isMine count++)
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
      cellCreator(i, j, (Math.random() < 0.2), false, true);
      cells.push(newCell);
    } 
  }

  var generatedBoard = {cells}
  return generatedBoard;
}  

// Stretch Goal 2 - reset the board!
// 

// function resetTheBoard() {
//   if (checkForWin) {
//     startGame();
//   }
// }

// 
// function resetTheBoard checks what function checkForWin returns. Is it a message "you won" it executes the function
// it calls startGame function? (in next step it creates a button that once clicked calls startGame function)
// 
// After a win or loss, give players a chance to try again by resetting the board to its default state. 
// You'll need to put classes back the way they were at the start, and re-initialize the global board object.

