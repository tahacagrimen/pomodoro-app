import React, { createContext, useState } from "react";

type PodomoroContextData = {
  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  shortBreak: number;
  setShortBreak: React.Dispatch<React.SetStateAction<number>>;
  longBreak: number;
  setLongBreak: React.Dispatch<React.SetStateAction<number>>;
  pomodoro: number;
  setPomodoro: React.Dispatch<React.SetStateAction<number>>;
};

type Props = {
  children: React.ReactNode;
};

export const PodomoroContext = createContext<PodomoroContextData>(null);

export const PodomoroProvider: React.FC<Props> = ({ children }) => {
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
