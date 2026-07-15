import { useState } from "react";
import { Circle, X } from "lucide-react";

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isCircleTurn, setIsCircleTurn] = useState(true);
  const [winner, setWinner] = useState("");
  const [draw, setDraw] = useState(false);
  const [score, setScore] = useState({
    o: 0,
    x: 0,
    draw: 0,
  });

  const checkWinner = (updatedBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        updatedBoard[a] &&
        updatedBoard[a] === updatedBoard[b] &&
        updatedBoard[a] === updatedBoard[c]
      ) {
        setWinner(updatedBoard[a]);
        setScore((prev) => ({
          ...prev,
          [updatedBoard[a]]: prev[updatedBoard[a]] + 1,
        }));
        return;
      }
    }

    if (!updatedBoard.includes("")) {
      setDraw(true);

      setScore((prev) => ({
        ...prev,
        draw: prev.draw + 1,
      }));
    }
  };

  const handleClick = (index) => {
    if (board[index] !== "" || winner || draw) return;

    const updatedBoard = [...board];
    updatedBoard[index] = isCircleTurn ? "o" : "x";

    setBoard(updatedBoard);
    setIsCircleTurn(!isCircleTurn);

    checkWinner(updatedBoard);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsCircleTurn(true);
    setWinner("");
    setDraw(false);
  };

  return (
    <div className="container">
      <h1 className="title">
        {winner ? (
          <div className="result">
            Congratulations{" "}
            {winner === "o" ? (
              <Circle className="circle-icon" size={54} />
            ) : (
              <X className="cross-icon" size={54} />
            )}{" "}
            Wins
          </div>
        ) : draw ? (
          "It's a Draw!"
        ) : (
          <>
            Tic <span>Tac</span> Toe Game
          </>
        )}
      </h1>

      <div className="scoreboard">
        <div className="score-card">
          <Circle size={22} className="circle-icon" />

          <span>{score.o}</span>
        </div>

        <div className="score-card">
          <X size={22} className="cross-icon" />

          <span>{score.x}</span>
        </div>

        <div className="score-card draw-card">
          <span>Draw</span>

          <strong>{score.draw}</strong>
        </div>
      </div>

      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="boxes" onClick={() => handleClick(index)}>
            {cell === "o" && (
              <Circle size={70} strokeWidth={2.5} className="circle-icon" />
            )}

            {cell === "x" && (
              <X size={70} strokeWidth={2.5} className="cross-icon" />
            )}
          </div>
        ))}
      </div>

      <button className="reset-btn" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
