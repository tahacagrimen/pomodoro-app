import React, { useContext, useEffect } from "react";
import { PomodoroContext } from "../contexts/PomodoroContext";

const Timer = () => {
  const {
    color,
    pomodoro,
    shortBreak,
    longBreak,
    activeBtn,
    isTimerRunning,
    setIsTimerRunning,
    isTimerCompleted,
    setIsTimerCompleted,
    miliseconds,
    setMiliseconds,
  } = useContext(PomodoroContext);

  const minutes = Math.floor(miliseconds / 60000);
  const seconds = ((miliseconds % 60000) / 1000).toFixed(0);

  useEffect(() => {
    if (activeBtn === "pomodoro") {
      setMiliseconds(pomodoro * 60000);
    } else if (activeBtn === "short") {
      setMiliseconds(shortBreak * 60000);
    } else if (activeBtn === "long") {
      setMiliseconds(longBreak * 60000);
    }
  }, [activeBtn, pomodoro, shortBreak, longBreak]);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setMiliseconds((miliseconds) => miliseconds - 1000);
      }, 1000);
    } else if (!isTimerRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, miliseconds]);

  return (
    <div className="timer">
      <div className="outer"></div>
      <div className="middle">
        <div className="countdown">
          {minutes}:{seconds}
        </div>
        <div className="btn">
          {isTimerRunning ? (
            <button onClick={() => setIsTimerRunning((prev) => !prev)}>
              PAUSE
            </button>
          ) : (
            <button onClick={() => setIsTimerRunning((prev) => !prev)}>
              START
            </button>
          )}
        </div>
      </div>
      <div className="inner"></div>
    </div>
  );
};

export default Timer;
