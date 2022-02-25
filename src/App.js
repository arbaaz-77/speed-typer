import React, { useEffect, useRef, useState } from "react";
import useWordGame from "./hooks/useWordGame";

const App = () => {
  const {
    inputRef,
    handleChange,
    text,
    isStarted,
    time,
    startGame,
    wordCount,
  } = useWordGame();

  return (
    <div>
      <h1>Speed Typer</h1>
      <textarea
        ref={inputRef}
        onChange={handleChange}
        value={text}
        disabled={!isStarted}
      />
      <h4>Time Remaining: {time} </h4>
      <button
        className="button"
        type="button"
        disabled={isStarted}
        onClick={startGame}
      >
        Start Game
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
};

export default App;
