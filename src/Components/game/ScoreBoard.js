import React from "react";
import "./ScoreBoard.css";
const ScoreBoard = (props) => {
  const restartHandler = () => {
    props.onRestart();
    props.random();
  };

  return (
    <div className={props.winner ? "scoreCard" : "flexBox"}>
      {props.winner && (
        <h3 className="fonth3">You take {props.turn} turns. 🏆</h3>
      )}
      <div className="resultbox">
        <div className="flex border">
          <h2>{props.turn}</h2>
          <strong>Turn</strong>
        </div>
        <div className="flex border">
          <h2>{props.match}</h2>
          <strong>Match</strong>
        </div>
      </div>
      <div className="button">
        <button onClick={restartHandler}>Restart</button>
        <button onClick={props.onExit}>Exit</button>
      </div>
    </div>
  );
};
export default ScoreBoard;
