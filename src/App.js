import React, { useState, useEffect, useRef } from "react";
import './App.css';
import shuffle from "shuffle-array";
import GamePanel from "./components/GamePanel";
import Reward from "react-rewards";
import dialogs from "./components/dialogs"


const App = () => {
  const [board, setBoard] = useState([]);
  const [victory, setVictory] = useState(false);
  const [bingoSelector, setBingoSelector] = useState([]);

  const ref = useRef(null);

  useEffect(() => {
    initialize();
  }, []);

 

  const initialize = () => {
    let data = shuffle(dialogs);
    data = [...[...data].splice(0, 12), `BINGO 😈`, ...[...data].splice(12)];
    data = data.reduce(
      (data, value, index) => [
        ...data,
        { value, selected: index !== 12 ? false : true },
      ],
      []
    );
    setBoard(data);
    setBingoSelector(new Array(12).fill(false));
    setVictory(false);
  };

  const isWinner = () => {
    console.log(bingoSelector);
    if (!board.length) return;

    // Test selected ligne 
    if (
      board[0,4].selected &&
      
      !bingoSelector[0]
    ) {
      bingoSelector[0] = true;


      ref.current.rewardMe();
      console.log(board[0].selected);
      console.log(bingoSelector[0]);
    }

    if (
      board[5,9].selected &&
     
      !bingoSelector[1]
    ) {
      bingoSelector[1] = true;
      ref.current.rewardMe();
    }
    if (
      board[10,14].selected &&
     
      !bingoSelector[2]
    ) {
      bingoSelector[2] = true;
      ref.current.rewardMe();
    }
    if (
      board[15,19].selected &&
      
      !bingoSelector[3]
    ) {
      bingoSelector[3] = true;
      ref.current.rewardMe();
    }

    if (
      board[20, 24].selected &&
     
      !bingoSelector[4]
    ) {
      bingoSelector[4] = true;
      ref.current.rewardMe();
    }



    if (board.every((val) => val.selected === true)) {
      setVictory(true);
    }
    // else {
    //   setGameWon(false);
    // }
  };

  const selectCell = (index) => {
    // if (gameWon) return;
    let newBoard = [...board];
    newBoard[index].selected = index !== 12 ? !board[index].selected : true;
    setBoard(newBoard);
    isWinner();
  };

  return (
    <div className="container">
      <Reward
        ref={ref}
        type="emoji"
        lifetime={500}
        config={{
          spread: 150,
          emoji: ["🎃", "🍬", "🍭", "🎃", "🍬", "🍭", "🎃", "🕸️"],
        }}
      ></Reward>
      {victory ? (
        <h1 className="header">VICTORY 🥳🥳🥳🥳 </h1>
      ) : (
        <h1 className="header">Halloween BINGO</h1>
      )}
      <GamePanel data={board} selectCell={selectCell} />
      
        <button className="reload" onClick={initialize}>
          Reload Game
        </button>
     
     
    </div>
  );
};

export default App;
