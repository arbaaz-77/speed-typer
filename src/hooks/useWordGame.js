import React, { useEffect, useRef, useState } from "react";

const useWordGame = () => {
  const STARTING_TIME = 5;

  const [text, setText] = useState("");
  const [time, setTime] = useState(STARTING_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const calculateWordCount = (str) => {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  };

  const startGame = () => {
    setIsStarted(true);
    setText("");
    setTime(STARTING_TIME);
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const endGame = () => {
    setIsStarted(false);
    setWordCount(calculateWordCount(text));
  };

  useEffect(() => {
    if (isStarted && time > 0) {
      setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      endGame();
    }
  }, [time, isStarted]);

  return {
    inputRef,
    handleChange,
    text,
    isStarted,
    time,
    startGame,
    wordCount,
  };
};

export default useWordGame;
