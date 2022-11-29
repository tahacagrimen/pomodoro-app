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
  isTimerRunning: boolean;
  setIsTimerRunning: React.Dispatch<React.SetStateAction<boolean>>;
  isTimerPaused: boolean;
  setIsTimerPaused: React.Dispatch<React.SetStateAction<boolean>>;
  isTimerStopped: boolean;
  setIsTimerStopped: React.Dispatch<React.SetStateAction<boolean>>;
  isTimerCompleted: boolean;
  setIsTimerCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  miliseconds: number;
  setMiliseconds: React.Dispatch<React.SetStateAction<number>>;
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
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isTimerStopped, setIsTimerStopped] = useState(false);
  const [isTimerCompleted, setIsTimerCompleted] = useState(false);
  const [miliseconds, setMiliseconds] = useState(0);

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
        isTimerRunning,
        setIsTimerRunning,
        isTimerPaused,
        setIsTimerPaused,
        isTimerStopped,
        setIsTimerStopped,
        isTimerCompleted,
        setIsTimerCompleted,
        miliseconds,
        setMiliseconds,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};
