import React from 'react';
import { Route,Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login"
import Footer from './components/Footer/Footer';
import Userportal from './Pages/User/User';
import Register from './Pages/Register/Register';
import History from './Pages/History/History';

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
