import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const styles = {
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];
    // if user click an occupied square or if game is won return
    if (winner || boardCopy[index]) return;
    //Put an X or O in the clicked square
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const renderMoves = () => {
    return (
      <button
        onClick={() => {
          setBoard(Array(9).fill(null));
        }}
      >
        Start Game
      </button>
    );
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? `Winner : ${winner}`
            : `Next Palyer : ${xIsNext ? "X" : "O"}`}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
