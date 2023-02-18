import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [modes, setModes] = useState({mode:"dark", modeText:"Light"});
  const toggleMode = () => {
    if (modes.mode === "light") {
      setModes({ mode: "dark", modeText: "Light" });
    } else {
      setModes({ mode: "light", modeText: "Dark" });
    }
     console.log("I RAN and mode changed to",modes);
  };
  return (
    <>
      <div>
        <Navbar topTitle="Keke" kok="JOE" {...modes} toggle={toggleMode} />
        <About mode={modes.mode} />
      </div>
    </>
  );
}

export default App;
