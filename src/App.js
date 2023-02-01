import React from "react";
import "./style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Home";
import APropos from "./pages/APropos";
import FicheLogement from "./pages/FicheLogement";
import Erreur404 from "./pages/Erreur404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="*" element={<Erreur404 />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/FicheLogement" element={<FicheLogement />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
