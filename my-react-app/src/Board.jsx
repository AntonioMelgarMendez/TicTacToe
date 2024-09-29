import { useState } from 'react';
import './Board.css';
import Message from './Message'; 

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); 
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    const value = squares[index];
    return (
      <td 
        onClick={() => handleClick(index)} 
        data-index={index} 
        className={`cell ${value ? value : ''}`} 
      >
        {value}
      </td>
    );
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="game-board">
      <table>
        <tbody>
          <tr>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </tr>
          <tr>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </tr>
          <tr>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </tr>
        </tbody>
      </table>

      {!winner ? (
        <p>Turno de: {xIsNext ? 'X' : 'O'}</p>
      ) : (
        <Message winner={winner} onContinue={resetGame} />
      )}
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; 
    }
  }
  return null;
}

export default Board;
