import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider } from "./hooks/useTheme";

import Index from "./pages/Index.js";
import Portfoliojulien from "./pages/Portfoliojulien.js";
import BoutiqueFr from "./pages/BoutiqueFr.js";
import Ptut from "./pages/Ptut.js";
import Automata from "./pages/Automata.js";
import Connect4 from "./pages/Connect4.js";
import Sokoban from "./pages/Sokoban.js";
import Metaheuristic from "./pages/Metaheuristic.js";
import Elk from "./pages/Elk.js";
import Vulnhub from "./pages/Vulnhub.js";
import Forensic from "./pages/Forensic.js";
import Owasp from "./pages/Owasp.js";
import Profilage from "./pages/Profilage.js";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
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
          <Route path="/Metaheuristic" element={<Metaheuristic />} />
          <Route path="/Elk" element={<Elk />} />
          <Route path="/Vulnhub" element={<Vulnhub />} />
          <Route path="/Forensic" element={<Forensic />} />
          <Route path="/Owasp" element={<Owasp />} />
          <Route path="/Profilage" element={<Profilage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
