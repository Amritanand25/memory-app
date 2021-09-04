import React, { useState } from "react";

import Home from "./home/Home";
import GameBoard from "./game/GameBoard";

const Index = (props) => {
  const [playGame, setPlayGame] = useState(false);
  const [randomize, setRandomize] = useState("");

  const playGameHandler = () => {
    setPlayGame(true);
  };

  const playGameHandlerExit = () => {
    setPlayGame(false);
  };

  const randomData = (callBack) => {
    setRandomize(callBack);
  };

  return (
    <div>
      {!playGame && (
        <Home random={randomize} playGameHandler={playGameHandler} />
      )}
      {playGame && (
        <GameBoard randomData={randomData} playgame={playGameHandlerExit} />
      )}
    </div>
  );
};

export default Index;
