import React, { useContext } from "react";
import { FiSettings } from "react-icons/fi";
import { PomodoroContext } from "../contexts/PomodoroContext.js";

const SettingsButton = () => {
  const { setIsSettingsModalOpen, color } = useContext(PomodoroContext);
  return (
    <button
      className={`settings settings${
        color === "red" ? "--red" : color === "blue" ? "--blue" : "--purple"
      }`}
      onClick={() => setIsSettingsModalOpen((prev) => !prev)}
    >
      <FiSettings />
    </button>
  );
};

export default SettingsButton;
