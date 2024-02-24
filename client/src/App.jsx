import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import "./App.css";
import { Admin, Home, Login } from "./pages";
import { Navbar,Footer } from "./components";

function App() {

  return (
    <AnimatePresence>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} /> 
          <Route path="/admin" element={<Admin />} /> 
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
