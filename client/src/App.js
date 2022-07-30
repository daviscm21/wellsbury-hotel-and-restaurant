import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import React, { useState, useEffect } from "react";
import Header from './components/header/header'; 
import Home from './components/home/home';
import Area from './components/area/area';
import ViewCart from './components/viewcart/viewcart'
import Footer from './components/footer/footer'

function App() {
  const [area, setArea] = useState('');
  

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Raleway:500|Vollkorn:400i" rel="stylesheet"></link>
    <Router>
    <Routes>
      <Route exact path = '/' element={<div > <Header/> <Home setArea={setArea} /> <ViewCart /><Footer /></div>}/>  
      <Route exact path = '/bedroom' element={<div > <Header/> <Area area={area} setArea={setArea} /> <ViewCart /> <Footer /></div>}/> 
      <Route exact path = '/living-room' element={<div > <Header/> <Area area={area} setArea={setArea} /> <ViewCart /> <Footer /></div>}/> 
      <Route exact path = '/dining-room' element={<div > <Header/> <Area area={area} setArea={setArea} /> <ViewCart /> <Footer /></div>}/> 
      <Route exact path = '/office' element={<div > <Header/> <Area area={area} setArea={setArea} /><ViewCart /> <Footer /></div>}/> 
      <Route exact path = '/garden' element={<div > <Header/> <Area area={area} setArea={setArea} /> <ViewCart /> <Footer /></div>}/> 
    </Routes>
  </Router>
    </div>
  );
}

export default App;
