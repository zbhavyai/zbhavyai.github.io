import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='*' element={<Navigate to='/' />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
