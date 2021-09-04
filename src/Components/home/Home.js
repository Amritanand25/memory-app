import React from "react";
import "./Home.css";

const Home = (props) => {
  const gameHandler = () => {
    props.playGameHandler();
    if (props.randomize) {
      props.randomize();
    }
  };
  return (
    <div className="container screenHeight">
      <div className="box">
        <h1>Memory Game</h1>
        <button onClick={gameHandler}>Start Now</button>
      </div>
    </div>
  );
};

export default Home;
