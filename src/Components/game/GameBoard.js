import React, { useState, useEffect, useRef } from "react";
import "./GameBoard.css";
import ScoreBoard from "./ScoreBoard.js";
let arr = [
  "A", "A", "B", "B",
  "C", "C", "D", "D",
  "E", "E", "F", "F",
  "G", "G", "H", "H",
];

let bool = [
  false, false, false, false,
  false, false, false, false,
  false, false, false, false,
  false, false, false, false,
];
const disab = [
  false, false, false, false,
  false, false, false, false,
  false, false, false, false,
  false, false, false, false,
];
const classes = [
  "smallbox", "smallbox", "smallbox", "smallbox",
  "smallbox", "smallbox", "smallbox", "smallbox",
  "smallbox", "smallbox", "smallbox", "smallbox",
  "smallbox", "smallbox", "smallbox", "smallbox",
];
const GameBoard = (props) => {
  const [isVisible, setIsVisible] = useState(bool);
  const prevRef = useRef();
  const [winner, setWinner] = useState(false);
  const [turn, setTurn] = useState(0);
  const [match, setMatch] = useState(0);
  const [styleClass, setStyleClass] = useState(classes);
  const [arrVal, setArrVal] = useState(arr);
  const [count, setCount] = useState({});

  const [disable, setDisable] = useState(disab);

  // const [invisible, setInvisible] = useState(false);

  const visibleHandler = (index) => {
    setTurn(turn + 1);
    let arr = [...isVisible];
    arr[index] = true;
    let a = [...styleClass];
    a[index] = "background smallbox";
    setStyleClass(a);
    setIsVisible(arr);
    setCount({ val: arrVal[index], idx: index });

    if (
      arrVal[index] === prevRef.current.val &&
      index !== prevRef.current.idx
    ) {
      let arr = [...isVisible];
      arr[index] = false;
      arr[prevRef.current.idx] = false;
      setTimeout(() => {
        setIsVisible(arr);
      }, 1000);
      let dis = [...disable];
      dis[index] = true;
      dis[prevRef.current.idx] = true;
      setDisable(dis);
      let clas = [...styleClass];
      clas[index] = "invisible";
      clas[prevRef.current.idx] = "invisible";
      setStyleClass(clas);
      setMatch(match + 1);
    } else {
      let a = [...styleClass];
      if (a[prevRef.current.idx] === "background smallbox") {
        a[prevRef.current.idx] = "smallbox";
        setStyleClass(a);
        let b = [...isVisible];
        b[prevRef.current.idx] = false;
        setIsVisible(b);
      }
    }
  };
  useEffect(() => {
    prevRef.current = count;
  });

  const restartHandler = () => {
    setIsVisible(bool);
    prevRef.current = {};
    setTurn(0);
    setMatch(0);
    setStyleClass(classes);
    setCount({});
    setDisable(disab);
  };

  const random = () => {
    setArrVal(arrVal.sort(() => Math.random() - 0.5));
    props.randomData(arrVal.sort(() => Math.random() - 0.5));
  };

  useEffect(() => {
    let flag = false;
    for (let i = 0; i < styleClass.length; i++) {
      if (styleClass[i] === "invisible") {
        flag = true;
      } else {
        flag = false;
        break;
      }
    }
    setWinner(flag);
  }, [styleClass]);

  return (
    <div className="gamecontainer heightcontainer">
      {!winner && (
        <div className="gameBox">
          {arrVal.map((item, i) => (
            <div
              key={i}
              disabled={disable[i]}
              className={styleClass[i]}
              onClick={() => visibleHandler(i)}
            >
              {isVisible[i] && <h1>{item}</h1>}
            </div>
          ))}
        </div>
      )}
      <ScoreBoard
        random={random}
        winner={winner}
        onRestart={restartHandler}
        onExit={props.playgame}
        match={match}
        turn={turn}
      />
    </div>
  );
};

export default GameBoard;
