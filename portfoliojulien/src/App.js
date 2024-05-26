import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Portfoliojulien from "./pages/Portfoliojulien.js";
import BoutiqueFr from "./pages/BoutiqueFr.js";
import Ptut from "./pages/Ptut.js";
import Automata from "./pages/Automata.js";
import Connect4 from "./pages/Connect4.js";
import Sokoban from "./pages/Sokoban.js";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <BrowserRouter>
      <Analytics />
      <SpeedInsights />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Portfoliojulien" element={<Portfoliojulien />} />
        <Route path="/BoutiqueFr" element={<BoutiqueFr />} />
        <Route path="/Ptut" element={<Ptut />} />
        <Route path="/Automata" element={<Automata />} />
        <Route path="/Connect4" element={<Connect4 />} />
        <Route path="/Sokoban" element={<Sokoban />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
