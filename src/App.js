import React, { useState, useEffect, useRef } from "react";
import shuffle from "shuffle-array";
import GamePanel from "./components/GamePanel";
import Reward from "react-rewards";
import dialogs from "./components/dialogs";
import "./App.css";

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

    //Select diagonal with bingoSelector 10
    if (!bingoSelector[10]) {
      let j = 0;
      while (j <= 24 && board[j].selected) {
        j += 6;
      }
      if (j === 30) {
        bingoSelector[10] = true;
        ref.current.rewardMe();
      }
    }
    //Select diagonal with bingoSelector 11
    if (!bingoSelector[11]) {
      let j = 4;
      while (j <= 20 && board[j].selected) {
        j += 4;
      }
      if (j === 24) {
        bingoSelector[11] = true;
        ref.current.rewardMe();
      }
    }

    for (let i = 0; i < 5; i++) {
      //Select from column
      if (!bingoSelector[i + 5]) {
        let j = i;
        while (j <= i + 20 && board[j].selected) {
          j += 5;
        }
        if (j === i + 25) {
          bingoSelector[i + 5] = true;
          ref.current.rewardMe();
        }
      }
      //Select from row
      if (!bingoSelector[i]) {
        let j = i * 5;
        while (j <= i * 5 + 4 && board[j].selected) {
          j++;
        }
        if (j === i * 5 + 5) {
          bingoSelector[i] = true;
          ref.current.rewardMe();
        }
      }
    }
    //Set Victory "you won"
    if (board.every((val) => val.selected === true)) {
      setVictory(true);
    }
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
        <h1 className="header">You won 🎃 🎃 🎃</h1>
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
