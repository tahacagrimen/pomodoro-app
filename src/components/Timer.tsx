import React, { useContext, useEffect } from "react";
import { PomodoroContext } from "../contexts/PomodoroContext";
import "../styles/_timer.scss";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

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
  const seconds =
    (miliseconds % 60000) / 1000 < 10
      ? `0${Math.floor((miliseconds % 60000) / 1000)}`
      : Math.floor((miliseconds % 60000) / 1000);

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
      <div className="outer">
        <CountdownCircleTimer
          isPlaying={isTimerRunning}
          key={activeBtn}
          duration={miliseconds / 1000}
          size={300}
          strokeWidth={12}
          rotation="counterclockwise"
          trailStrokeWidth={24}
          trailColor="#151932"
          initialRemainingTime={miliseconds / 1000}
          colors={`${
            color === "red"
              ? "#f87070"
              : color === "blue"
              ? "#72f1f7"
              : "#d981f9"
          }`}
        >
          {({ remainingTime }) => (
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
          )}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default Timer;
