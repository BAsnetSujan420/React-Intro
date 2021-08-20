import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const styles = {
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (index) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // if user click an occupied square or if game is won, return
    if (winner || squares[index]) return;
    //Put an X or O in the clicked square
    squares[index] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? `Winner : ${winner}`
            : `Next Player : ${xIsNext ? "X" : "O"}`}
        </p>
        <h3>History</h3>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
