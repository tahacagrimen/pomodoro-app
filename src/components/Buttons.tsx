import React, { useContext } from "react";
import { PomodoroContext } from "../contexts/PomodoroContext";

const Buttons: React.FC = () => {
  const { activeBtn, setActiveBtn } = useContext(PomodoroContext);

  return (
    <div className="btn-group">
      <button
        onClick={() => setActiveBtn("pomodoro")}
        className={`__pomodoro-btn${
          activeBtn === "pomodoro" ? "--active" : "--deactive"
        }`}
      >
        pomodoro
      </button>
      <button
        className={`__pomodoro-btn${
          activeBtn === "short" ? "--active" : "--deactive"
        }`}
        onClick={() => setActiveBtn("short")}
      >
        short break
      </button>
      <button
        className={`__pomodoro-btn${
          activeBtn === "long" ? "--active" : "--deactive"
        }`}
        onClick={() => setActiveBtn("long")}
      >
        long break
      </button>
    </div>
  );
};

export default Buttons;
