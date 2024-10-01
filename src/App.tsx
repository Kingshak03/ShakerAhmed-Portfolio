import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar.tsx";
import Home from "./components/home/Home.tsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <Home />
    </>
  );
}

export default App;
