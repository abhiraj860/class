import './App.css'
import {useState} from 'react'

function Square({value, onSquareClick}) {
  return <button className='square' onClick={onSquareClick}>{value}</button>
}

function Board({xIsNext, squares, onPlay}) {
 
  function handleClick(i) {
    if(squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const renderBoard = ()=>{
    const board = [];
    board.push(<div className='status'>{status}</div>);
    for(let i = 0; i < 9; i += 3) {
      const row = [];
      for(let k = i; k < i + 3; k++) {
        row.push(<Square value={squares[k]} onSquareClick={()=>handleClick(k)}/>);
      }
      board.push(<div className='board-row'>{row}</div>);
    }
    return board;
  }
  
  return (
    <div>
      {renderBoard()}
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [toggle, setToggle] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  let buttonArr = [];
  function handleToggle() {
    // buttonArr = buttonArr.reverse();
    // console.log('Here');
    setToggle(!toggle);
    // console.log(buttonArr);
  }

  
  const moves = history.map((squares, move)=>{
    let description;
    if(move > 0) {
      description = 'Go to move # ' + move;
    } else {
      description = 'Go to game start';
    }
    const ele = <li key={move}><button onClick={()=> jumpTo(move)}>{description} </button> </li>;
    buttonArr.push(ele);
    return ele;
  });


  return (
    <div className = 'game'>
        <div className='game-board'>
        <h3> You are at move {currentMove}</h3>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className = 'game-info'>
          <button onClick={handleToggle}>Toggle State</button>
          {[<ol>{buttonArr}</ol>]}
        </div>
    </div>
  );
}