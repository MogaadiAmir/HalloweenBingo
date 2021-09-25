import React from "react";

const GamePanel = ({ data, selectCell }) => {
  return (
    <div className="game-board">
      {data.map(({ value, selected }, index) => (
        <button
          key={`${value}-${selected}`}
          name={`${value}-${selected}`}
          className={`cell ${selected ? "selected" : ""}`}
          onClick={() => selectCell(index)}
        >
          <span className="number">{index + 0}</span>
          <span>{value}</span>
        </button>
      ))}
    </div>
  );
};
export default GamePanel;
