import Header from "./components/Header";
import Buttons from "./components/Buttons";
import SettingsModal from "./components/SettingsModal";
import Timer from "./components/Timer";
import "./styles/_app.scss";
import "./styles/_variable.scss";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModelOpen] = useState<Boolean>(false);

  return (
    <div className="App">
      <Header />
      <Buttons />
      <Timer />
      {isModalOpen && <SettingsModal />}
    </div>
  );
}

export default App;
