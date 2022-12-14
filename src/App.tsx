import Header from "./components/Header";
import Buttons from "./components/Buttons";
import SettingsModal from "./components/SettingsModal";
import Timer from "./components/Timer";
import "./styles/_app.scss";
import "./styles/_variable.scss";
import { useContext } from "react";
import {
  PomodoroContext,
  PomodoroProvider,
} from "./contexts/PomodoroContext.js";
import SettingsButton from "./components/SettingsButton";

function App() {
  const { isSettingsModalOpen, font } = useContext(PomodoroContext);

  return (
    <div className={`App App--${font}`}>
      <Header />
      <Buttons />
      <Timer />
      <SettingsModal />
      <SettingsButton />
    </div>
  );
}

export default App;
