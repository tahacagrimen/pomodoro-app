import React, { useContext } from "react";
import { PomodoroContext } from "../contexts/PomodoroContext";

const Buttons: React.FC = () => {
  const { activeBtn, setActiveBtn, color } = useContext(PomodoroContext);

  return (
    <div className="btn-group">
      <button
        onClick={() => setActiveBtn("pomodoro")}
        className={`__pomodoro-btn __pomodoro-btn${
          activeBtn === "pomodoro" ? "--active" : "--deactive"
        }${
          color === "red" ? "--red" : color === "blue" ? "--blue" : "--purple"
        }`}
      >
        pomodoro
      </button>
      <button
        className={`__short-btn __short-btn${
          activeBtn === "short" ? "--active" : "--deactive"
        }${
          color === "red" ? "--red" : color === "blue" ? "--blue" : "--purple"
        }`}
        onClick={() => setActiveBtn("short")}
      >
        short break
      </button>
      <button
        className={`__long-btn __long-btn${
          activeBtn === "long" ? "--active" : "--deactive"
        }${
          color === "red" ? "--red" : color === "blue" ? "--blue" : "--purple"
        }`}
        onClick={() => setActiveBtn("long")}
      >
        long break
      </button>
    </div>
  );
};

export default Buttons;
