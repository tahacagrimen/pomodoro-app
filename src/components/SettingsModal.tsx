import React, { useContext } from "react";
import { PodomoroContext } from "../contexts/PodomoroContext.js";

const SettingsModal = () => {
  const { isSettingsModalOpen, setIsSettingsModalOpen, shortBreak } =
    useContext(PodomoroContext);

  return (
    <div>
      SettingsModal
      <button onClick={() => setIsSettingsModalOpen(true)}></button>
      {isSettingsModalOpen ? "Open" : "Closed"}
    </div>
  );
};

export default SettingsModal;
