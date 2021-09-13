import React, {useState} from "react";
import "./ScoreBoard.css";
import Timer from '../Timer/Timer';

const ScoreBoard = (props) => {
  const [toggle, setToggle] = useState(false);
  const [exit, setExit] = useState(false);

  const restartHandler = () => {
    props.onRestart();
    props.random();
    setToggle(!toggle);
  };

  const exitHandler = () => {
    props.onExit();
    setExit(true);
  }

  return (
    <div className={props.winner ? "scoreCard" : "flexBox"}>
      {props.winner && (
        <h3 className="fonth3">You take {props.turn} turns. 🏆</h3>
      )}
      <Timer winner={props.winner} toggle={toggle} exit={exit} />
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
        <button onClick={exitHandler}>Exit</button>
      </div>
    </div>
  );
};
export default ScoreBoard;
