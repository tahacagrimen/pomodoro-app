import Header from "./components/Header";
import Buttons from "./components/Buttons";
import SettingsModal from "./components/SettingsModal";
import Timer from "./components/Timer";
import "./styles/_app.scss";
import "./styles/_variable.scss";
import { useState } from "react";
import { PodomoroProvider } from "./contexts/PodomoroContext.js";

function App() {
  return (
    <div className="App">
      <PodomoroProvider>
        <Header />
        <Buttons />
        <Timer />
        {isSettingsModalOpen && <SettingsModal />}
      </PodomoroProvider>
    </div>
  );
}

export default App;
