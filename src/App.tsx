import Header from "./components/Header";
import Buttons from "./components/Buttons";
import SettingsModal from "./components/SettingsModal";
import Timer from "./components/Timer";
import "./styles/_app.scss";
import "./styles/_variable.scss";
import { useState, useContext } from "react";
import {
  PodomoroContext,
  PodomoroProvider,
} from "./contexts/PodomoroContext.js";

function App() {
  return (
    <PodomoroProvider>
      <div className="App">
        <Header />
        <Buttons />
        <Timer />
        <SettingsModal />
      </div>
    </PodomoroProvider>
  );
}

export default App;
