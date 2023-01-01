//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import Main from './Main';

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <button ><Link className="atag" to="">main</Link></button>
          <button onClick={handleShow}>menu</button>
        </header>
        <main>
          <Main />
          <Menu state={show} setState={handleShow} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
