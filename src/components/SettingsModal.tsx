import React, { useContext } from "react";
import { PomodoroContext } from "../contexts/PomodoroContext.js";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/_modal.scss";
import { TiTick } from "react-icons/ti";

const SettingsModal = () => {
  const {
    isSettingsModalOpen,
    setIsSettingsModalOpen,
    shortBreak,
    setShortBreak,
    longBreak,
    setLongBreak,
    pomodoro,
    setPomodoro,
    activeBtn,
    setActiveBtn,
    color,
    setColor,
    font,
    setFont,
  } = useContext(PomodoroContext);

  const [activeFont, setActiveFont] = React.useState(font);

  return (
    <div className={`modal modal${isSettingsModalOpen ? "--open" : "--close"}`}>
      <div className="modal__header">
        <h1>Settings</h1>
        <button
          className={`btn btn${
            color === "red" ? "--red" : color === "blue" ? "--blue" : "--purple"
          }`}
          onClick={() => setIsSettingsModalOpen(false)}
        >
          <AiOutlineClose />
        </button>
      </div>
      <div className="modal__times">
        <h2>TIME (MINUTES)</h2>
        <div className="modal__times__btns">
          <div>
            <h3>pomodoro</h3>
            <input
              type="number"
              step={1}
              value={pomodoro}
              onChange={(e) => setPomodoro(Number(e.target.value))}
            />
          </div>
          <div>
            <h3>short break</h3>
            <input
              type="number"
              step={1}
              value={shortBreak}
              onChange={(e) => setShortBreak(Number(e.target.value))}
            />
          </div>
          <div>
            <h3>long break</h3>
            <input
              type="number"
              step={1}
              value={longBreak}
              onChange={(e) => setLongBreak(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
      <div className="modal__font">
        <h2>FONT</h2>
        <div className="btn-font-group">
          <button
            className={`roboto roboto${
              activeFont === "roboto" ? "--active" : ""
            }`}
            onClick={() => {
              setFont("roboto");
              setActiveFont("roboto");
            }}
          >
            Aa
          </button>
          <button
            className={`ubuntu ubuntu${
              activeFont === "ubuntu" ? "--active" : ""
            }`}
            onClick={() => {
              setFont("ubuntu");
              setActiveFont("ubuntu");
            }}
          >
            Aa
          </button>
          <button
            className={`poppins poppins${
              activeFont === "poppins" ? "--active" : ""
            }`}
            onClick={() => {
              setFont("poppins");
              setActiveFont("poppins");
            }}
          >
            Aa
          </button>
        </div>
      </div>
      <div className="modal__color">
        <h2>COLOR</h2>
        <div className="btn-color-group">
          <button
            className={`btn-red btn-red${color === "red" ? "--active" : ""}`}
            onClick={() => setColor("red")}
          >
            <TiTick />
          </button>
          <button
            className={`btn-blue btn-blue${color === "blue" ? "--active" : ""}`}
            onClick={() => setColor("blue")}
          >
            <TiTick />
          </button>
          <button
            className={`btn-purple btn-purple${
              color === "purple" ? "--active" : ""
            }`}
            onClick={() => setColor("purple")}
          >
            <TiTick />
          </button>
        </div>
      </div>
      <div className="modal__apply">
        <button
          className={`btn btn${
            color === "red" ? "--red" : color === "blue" ? "--blue" : "--purple"
          }`}
          onClick={() => setIsSettingsModalOpen((prev) => !prev)}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
