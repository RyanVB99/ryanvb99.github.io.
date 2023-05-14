import { useState } from "react";

export function Board() {
    const [squares, setSquares] = useState(Array(9).fill("O"));
    const [isPlayer1, setIsPlayer1] = useState(true);
  
    function handleClick(i) { // TODO: Row, Position
      const newSquares = squares.slice(); // copy the "squares" array
  
      if (isAttemptedMoveValid(i, previousMove, newSquares, countOfMovesTakenThisTurn)) {
        countOfMovesTakenThisTurn++
        newSquares[i] = "X"; // Change the square to "X"
        setSquares(newSquares); // set the state to the copy
        previousMove = i; // set the previous move to the current move for next move
  
        if (countOfMovesTakenThisTurn == 3) {
          endTurn();
        }
      }
  
      else {
        window.alert("Invalid Move");
        return null;
      }
    }
  
    function endTurn() {
      console.log("End Turn");
      if (isPlayer1) {
        console.log("Player 1");
        setIsPlayer1(false);
        countOfMovesTakenThisTurn = 0;
      }
  
      else {
        console.log("Player 2");
        setIsPlayer1(true);
        countOfMovesTakenThisTurn = 0;
      }
    }
  
    function clearBoard() {
      console.log("Clear Board");
      setSquares(Array(9).fill("O"));
      countOfMovesTakenThisTurn = 0;
      setIsPlayer1(true);
    }
  
    const winner = calculateWinner(squares, isPlayer1);
  
    return (
      <>
        <div className="status">{winner ? "Winner: " + winner : "Current player: " + (isPlayer1 ? "Player 1" : "Player 2")}</div>
        <div> Moves Remaining: {3 - countOfMovesTakenThisTurn} </div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        </div>
        <div className="board-row">
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        </div>
        <div className="board-row">
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <div className="board-row">
        </div>
        <div className="board-row">
          <EndTurn value="End Turn" onEndTurnClick={() => endTurn()} />
        </div>
        <div className="board-row">
        </div>
        <div className="board-row">
          <ClearBoard value="New Game" onClearBoardClick={() => clearBoard()} />
        </div>
      </>
    );
  }

  let countOfMovesTakenThisTurn = 0;
let previousMove = 0;

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function EndTurn({ value, onEndTurnClick }) {
  return (
    <button className="endturn" onClick={onEndTurnClick}>
      {value}
    </button>
  );
}

function ClearBoard({ value, onClearBoardClick }) {
  return (
    <button className="clearboard" onClick={onClearBoardClick}>
      {value}
    </button>
  );
}

function isTargetBlank(targetIndex, boardState) {
  return (boardState[targetIndex] != "X");
}

function calculateWinner(squares, isPlayer1) {

  // If all squares are filled, current player loses
  if (squares.every(square => square == "X") && isPlayer1 == true) {
    return "Player 2";
  }

  else if (squares.every(square => square == "X") && isPlayer1 == false) {
    return "Player 1";
  }

  return null;
}

function isAttemptedMoveValid(attemptedMove, previousMove, boardState, countOfMovesTakenThisTurn) {

  if (countOfMovesTakenThisTurn >= 3) {
    return false;
  }

  if (!isTargetBlank(attemptedMove, boardState)) {
    return false;
  }

  if (countOfMovesTakenThisTurn == 0) {
    return true;
  }

  // Check if the attempted move is adjacent to the previous move
  if (!areIndecesAdjacent(attemptedMove, previousMove)) {
    return false;
  }

  // Check if the attempted move is in the correct row
  return areSquaresInSameRow(attemptedMove, previousMove);

}

function areIndecesAdjacent(index1, index2) {

  if (Math.abs(index1 - index2) > 1) {
    return false;
  }

  return true;
}

function areSquaresInSameRow(index1, index2) {

  if (getRowOfTarget(index1) == getRowOfTarget(index2)) {
    return true;
  }

  return false;
}

function getRowOfTarget(targetIndex) {

  if (targetIndex == 0 || targetIndex == 1) {
    return 0;
  }

  else if (targetIndex == 2 || targetIndex == 3 || targetIndex == 4) {
    return 1;
  }

  else if (targetIndex == 5 || targetIndex == 6 || targetIndex == 7 || targetIndex == 8) {
    return 2;
  }
}

export default Board;