import Header from "./components/Header";
import Buttons from "./components/Buttons";
import SettingsModal from "./components/SettingsModal";
import Timer from "./components/Timer";
import "./styles/_app.scss";
import "./styles/_variable.scss";
import { useContext, useState } from "react";
import { AppContext, AppProvider } from "./context/AppContext";

function App() {
  const { isModalOpen, setIsModelOpen } = useContext(AppContext);
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Buttons />
        <Timer />
        {isModalOpen && <SettingsModal />}
        <button onClick={() => setIsModelOpen(true)}>open modal</button>
      </div>
    </AppProvider>
  );
}

export default App;
