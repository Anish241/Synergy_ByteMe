import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import "./App.css";
import { Admin, Home, Login, User } from "./pages";
import { Navbar,Footer } from "./components";
import { Form } from "./pages/Bank";

function App() {

  return (
    <AnimatePresence>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login />} /> 
          <Route path="/admin" element={<Admin />} /> 
          <Route path="/user" element={<User />} /> 
          <Route path="/bankform" element={<Form />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;

