import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Game = () => {
  return (
    <div className="game">
      <div className="grid">
        <div className="cell" style={{ width: "33.3%" }} />
        <div className="cell" style={{ width: "33.3%" }} />
        <div className="cell" style={{ width: "33.3%" }} />

        <div className="cell" style={{ width: "33.3%" }} />
        <div className="cell" style={{ width: "33.3%" }} />
        <div className="cell" style={{ width: "33.3%" }} />

        <div className="cell" style={{ width: "33.3%" }} />
        <div className="cell" style={{ width: "33.3%" }} />
        <div className="cell" style={{ width: "33.3%" }} />
      </div>
      <div className="message">Game Message Here...</div>
      <div className="button">
        <button>Start Game</button>
      </div>
    </div>
  );
};

export default Game;
