import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./Game";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Game
      //grid 大小
      gridSize={5}
      //挑战大小
      challengeSize={6}
      //挑战时间
      challengeSeconds={3}
      //游戏时间
      playSeconds={10}
      //最大容错尝试
      maxWrongAttempts={3}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
