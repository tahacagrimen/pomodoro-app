import { createContext, useState } from "react";

export const PodomoroContext = createContext();

export const PodomoroProvider = ({ children }) => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [pomodoro, setPomodoro] = useState(25);

  return (
    <PodomoroContext.Provider
      value={{
        isSettingsModalOpen,
        setIsSettingsModalOpen,
        shortBreak,
        setShortBreak,
        longBreak,
        setLongBreak,
        pomodoro,
        setPomodoro,
      }}
    >
      {children}
    </PodomoroContext.Provider>
  );
};
