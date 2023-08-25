import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase-config";
import { signOut } from "firebase/auth";
import Button from "@mui/material/Button";
import "./header.css";
import logo from "../../assets/svgs/logo.png";




function Header() {
  const currentUser = useSelector((state) => state.counter);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.error(error);
      });
    navigate("/");
  };

  const travel = () => {
    navigate("/Login");
  };

  const teleport = () => {
    navigate("/Register");
  };

  return (
    <div className="containere">
      <img src={logo} alt="logo"></img>
      <div className="button-arrangement">
        {currentUser ? (
          <>
            {" "}
            <Button variant="contained" color="success" onClick={handleSignOut}>
              Log Out
            </Button>
          </>
        ) : (
          <>
            {" "}
            <Button
              className="loginButton"
              variant="text"
              color="success"
              size="large"
              onClick={travel}
            >
              Login
            </Button>
            <Button variant="contained" color="success" onClick={teleport}>
              Signup
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
