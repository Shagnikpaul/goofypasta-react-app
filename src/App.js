import "./App.css";
import About from "./components/Copypasta";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [modes, setModes] = useState({ mode: "dark", modeText: "🌙" });
  const toggleMode = () => {
    if (modes.mode === "light") {
      setModes({ mode: "dark", modeText: "🔆" });
    } else {
      setModes({ mode: "light", modeText: "🌙" });
    }
    console.log("I RAN and mode changed to", modes);
  };
  return (
    <div className="min-vh-100 bg-body" data-bs-theme={modes.mode}>
      <div className="bg-body min-vh-100" data-bs-theme={modes.mode}>
        <Navbar topTitle="COPY" kok="PASTA" {...modes} toggle={toggleMode} />
        <About mode={modes.mode} />
      </div>
      <p className="text-center  blockquote-footer mb-0  mt-n5 moremar">
        Made with 🗿 by Shagnik Paul. —
      </p>
    </div>
  );
}

export default App;
