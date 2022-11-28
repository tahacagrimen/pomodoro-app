import React, { useContext } from "react";
import { FiSettings } from "react-icons/fi";
import { PomodoroContext } from "../contexts/PomodoroContext.js";

const SettingsButton = () => {
  const { setIsSettingsModalOpen } = useContext(PomodoroContext);
  return (
    <button
      className="settings"
      onClick={() => setIsSettingsModalOpen((prev) => !prev)}
    >
      <FiSettings />
    </button>
  );
};

export default SettingsButton;
