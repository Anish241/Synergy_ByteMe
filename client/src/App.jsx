import React from "react";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import "./App.css";
import { Home, Login } from "./pages";

function App() {

  return (
    <AnimatePresence>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />  
      </Routes>
    </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
