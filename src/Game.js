import React from "react";
import { Cell, Footer } from "./components";
import utils from "./utils/utils";
import "./App.css";

const Game = ({ gridSize }) => {
  const cellIds = utils.createArray(gridSize * gridSize);
  const cellWidth = 100 / gridSize;
  return (
    <div className="game">
      <div className="grid">
        {cellIds.map((cellId) => (
          <Cell key={cellId} width={cellWidth} />
        ))}
        {/* <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Game;
