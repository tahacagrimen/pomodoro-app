import React, { useContext } from "react";
import { PomodoroContext } from "../contexts/PomodoroContext";
import "../styles/_buttons.scss";

const Buttons: React.FC = () => {
  const { activeBtn, setActiveBtn, color, isTimerRunning, setIsTimerRunning } =
    useContext(PomodoroContext);

  return (
    <div className="btn-group">
      <button
        onClick={() => {
          setActiveBtn("pomodoro");
          setIsTimerRunning(false);
        }}
        className={`btn-group__pomodoro btn-group__pomodoro${
          activeBtn === "pomodoro" ? "--active" : "--deactive"
        }${
          color === "red" ? "--red" : color === "blue" ? "--blue" : "--purple"
        }`}
      >
        pomodoro
      </button>
      <button
        className={`btn-group__short btn-group__short${
          activeBtn === "short" ? "--active" : "--deactive"
        }${
          color === "red" ? "--red" : color === "blue" ? "--blue" : "--purple"
        }`}
        onClick={() => {
          setActiveBtn("short");
          setIsTimerRunning(false);
        }}
      >
        short break
      </button>
      <button
        className={`btn-group__long btn-group__long${
          activeBtn === "long" ? "--active" : "--deactive"
        }${
          color === "red" ? "--red" : color === "blue" ? "--blue" : "--purple"
        }`}
        onClick={() => {
          setActiveBtn("long");
          setIsTimerRunning(false);
        }}
      >
        long break
      </button>
    </div>
  );
};

export default Buttons;
