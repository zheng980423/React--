import React from "react";
import { Cell, Footer } from "./components";

import "./App.css";

const Game = () => {
  return (
    <div className="game">
      <div className="grid">
        <Cell />
        <Cell />
        <Cell />

        <Cell />
        <Cell />
        <Cell />

        <Cell />
        <Cell />
        <Cell />
      </div>
      <Footer />
    </div>
  );
};

export default Game;
