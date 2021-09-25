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
 //test diag
 if(!bingoSelector[10]) {
      
  let j=0;
  while(j<=24 && board[j].selected ) {
    j+=6;
  }
  if (j===30) {
    bingoSelector[10]=true;
    ref.current.rewardMe();
  }
 }
}

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
