import React, { useState, useEffect } from "react";

const WordFlick = () => {
  const words = [
    "Full Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Competitive Programmer",
  ];

  const [part, setPart] = useState("");
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount((prevSkipCount) => prevSkipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prevI) => (prevI + 1 >= words.length ? 0 : prevI + 1));
          setOffset(0);
        }
      }

      const currentWord = words[i];
      const currentPart = currentWord.substr(0, offset);

      if (skipCount === 0) {
        if (forwards) {
          setOffset((prevOffset) => prevOffset + 1);
        } else {
          setOffset((prevOffset) => prevOffset - 1);
        }
      }

      setPart(currentPart);
    }, speed);

    return () => clearInterval(interval);
  }, [words, i, offset, forwards, skipCount]);

  return <div className="word ">{part}</div>;
};

export default WordFlick;
