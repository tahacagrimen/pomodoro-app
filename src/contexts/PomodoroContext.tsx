import React, { createContext, useState } from "react";

type PomodoroContextData = {
  isSettingsModalOpen: boolean;
  setIsSettingsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  shortBreak: number;
  setShortBreak: React.Dispatch<React.SetStateAction<number>>;
  longBreak: number;
  setLongBreak: React.Dispatch<React.SetStateAction<number>>;
  pomodoro: number;
  setPomodoro: React.Dispatch<React.SetStateAction<number>>;
  activeBtn: string;
  setActiveBtn: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  font: string;
  setFont: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  children: React.ReactNode;
};

export const PomodoroContext = createContext<PomodoroContextData>(null);

export const PomodoroProvider: React.FC<Props> = ({ children }) => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [pomodoro, setPomodoro] = useState(25);
  const [activeBtn, setActiveBtn] = useState("pomodoro");
  const [color, setColor] = useState("red");
  const [font, setFont] = useState("roboto");

  return (
    <PomodoroContext.Provider
      value={{
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
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};
