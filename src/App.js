import React from 'react';
import Header from './components/Header';
import Home from './Pages/Home';
import Login from "./Pages/Login"
import Footer from './components/Footer';
import { Route,Routes } from 'react-router-dom';
import Userportal from './Pages/Userportal';
import Register from './Pages/Register';
import History from './Pages/History';
function App() {
  return (
    <div >
      <Header/>
      <Routes> 
     <Route path="/" element={<Home/>}/>
     <Route path="/Register" element={<Register/>}/>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/Userportal" element={<Userportal/>}/>
     <Route path="/History" element={<History/>}/>
    </Routes>
      <Footer/>
    </div>
  );
}

export default App;
