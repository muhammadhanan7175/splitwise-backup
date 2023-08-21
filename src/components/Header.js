import React from 'react';
import './header.css';
import Button from '@mui/material/Button';
import logo from "../assets/svgs/logo.png"
import { useNavigate } from "react-router-dom";
import { auth } from './Firebase-config';
import { signOut } from 'firebase/auth';
import { useSelector } from "react-redux"

function Header() {
  // const currentUser=auth.currentUser.email;
  const currentUser= useSelector((state) => state.counter);
 const handleSignOut=async()=>{
  await signOut(auth).then(()=>{
    console.log("signed out")
  }).catch((error)=>{
    console.error(error)
  });
  navigate("/")
}
  const navigate = useNavigate()
   const travel = () => {
    navigate("/Login")
   }
   const teleport = () => {
    navigate("/Register")
   }

  return (
  <div className="containere">
  <img src={logo} alt='logo'></img>
  <div className='button-arrangement'>{
    
    currentUser  ? <> <Button variant="contained" color='success' onClick={handleSignOut}>Log Out</Button></>: <> <Button  className= "loginButton"variant="text" color='success' size='large'onClick={travel}>Login</Button>
 <Button variant="contained" color='success' onClick={teleport}>Signup</Button></>
  }
</div>


    </div>
  );
}

export default Header;

