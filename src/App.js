import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [modes, setModes] = useState({mode:"dark", modeText:"🌙"});
  const toggleMode = () => {
    if (modes.mode === "light") {
      setModes({ mode: "dark", modeText: "🔆" });
    } else {
      setModes({ mode: "light", modeText: "🌙" });
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
