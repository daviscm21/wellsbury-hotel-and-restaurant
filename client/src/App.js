import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header/header'; 
import Home from './components/Home/home';
import Hotel from './components/Hotel/hotel';
import Restaurant from './components/Restaurant/restaurant';
import Booked from './components/Booked/booked'; 
import Footer from './components/Footer/footer'; 

function App() {

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:700i|Fira+Sans" rel="stylesheet" type="text/css"></link>
     <Router>
      <Routes>
        <Route exact path = '/' element={<div><Header /> <Home /><Footer /></div>}/>        
        <Route exact path = '/hotel' element={<div><Header /> <Hotel /><Footer /></div>}/>
        <Route exact path = '/restaurant' element={<div><Header /> <Restaurant /><Footer /></div>}/>
        <Route exact path = '/booked' element={<div><Header /> <Booked /><Footer /></div>}/>        
      </Routes>
    </Router>
   </div> 
  );
}

export default App;
