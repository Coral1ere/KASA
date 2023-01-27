import React from "react"
import './style/App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Footer from './pages/Footer';
import APropos from './pages/APropos';
import FicheLogement from './pages/FicheLogement';
import Erreur from './pages/Erreur';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Erreur />} />
        <Route path='/APropos' element={<APropos />} />
        <Route path='/FicheLogement' element={<FicheLogement />} />
        <Route path='/Footer' element={<Footer />} />
      </Routes>
    </BrowserRouter>
  
  );
};

export default App;
