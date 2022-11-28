import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SettingsModal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);

  console.log(isModalOpen);

  return (
    <div>
      SettingsModal <button onClick={() => setIsModalOpen(true)}>Set</button>
    </div>
  );
};

export default SettingsModal;
