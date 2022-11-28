import { createContext, useState } from "react";

interface IAppContext {
  isModalOpen: boolean;
  setIsModelOpen: (value: boolean) => void;
  shortBreak: number;
  setShortBreak: (value: number) => void;
  longBreak: number;
  setLongBreak: (value: number) => void;
  pomodoro: number;
  setPomodoro: (value: number) => void;
  isTimerRunning: boolean;
  setIsTimerRunning: (value: boolean) => void;
}

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppContext = createContext({} as IAppContext);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [pomodoro, setPomodoro] = useState(25);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        setIsModelOpen,
        shortBreak,
        setShortBreak,
        longBreak,
        setLongBreak,
        pomodoro,
        setPomodoro,
        isTimerRunning,
        setIsTimerRunning,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
