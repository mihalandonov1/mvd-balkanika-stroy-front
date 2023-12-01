
import './App.css';

import { Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home/Home";
import Future from "./pages/Nova-sgrada/FutureBuilding"
import Realised from "./pages/RealisedProjects/ProjectsPage"
import MonolithHouse from "./pages/RealisedProjects/MonolithHouseBorilovo"
import BalkanikaPark from "./pages/RealisedProjects/BallkanikaPark"

function App() {
  return (
    <>    
      <Routes>
        <Route path="/" element={<Home />}> /</Route>
        <Route path="/future-building" element={<Future/>} />
        <Route path="/realised-buildings" element={<Realised/>} />
        <Route path="/realised-buildings/MonolithHouse" element={<MonolithHouse/>} />
        <Route path="/realised-buildings/BalkanikaPark" element={<BalkanikaPark/>} />
      </Routes>
    </>

  );
}

export default App;
