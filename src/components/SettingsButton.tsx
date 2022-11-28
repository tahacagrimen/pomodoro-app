import React, { useContext } from "react";
import { FiSettings } from "react-icons/fi";
import { PodomoroContext } from "../contexts/PodomoroContext.js";

const SettingsButton = () => {
  const { setIsSettingsModalOpen } = useContext(PodomoroContext);
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
